Meteor.methods({
	'uploadFile': function(fileid,filename){

		var fs = Meteor.npmRequire('fs');
		var file = Uploads.find({_id:fileid});
		Meteor.setTimeout(function(){

			var filepath = "./imports/uploads-" + fileid + "-" + filename;

			count = 0;

			CSV().from.stream(
				fs.createReadStream(filepath),
				{'escape':'\\'})
				.on('record', Meteor.bindEnvironment(function(row,index){
					count += 1
					Patients.insert({

						'createdAt': new Date(),
						'pid':row[0],
						'age':parseInt(row[1]),
						'leukemia_type':row[2],
						'num_prior_rx':parseInt(row[3]),
						'prior_cytotoxic':parseInt(row[4]),
						'prior_epigenetic':parseInt(row[5]),
						'prior_targeted':parseInt(row[6]),
						'complex_cg_2':parseInt(row[7]),
						'minus_5':parseInt(row[8]),
						'minus_7':parseInt(row[9]),
						'a11q':parseInt(row[10]),
						'inv16':parseInt(row[11]),
						'plus_8':parseInt(row[12]),
						'only_diploid':parseInt(row[13]),
						'minus_y':parseInt(row[14]),
						'ph_plus':parseInt(row[15]),
						'mrc_2010':row[16],
						'dysplastic_g':parseInt(row[17]),
						'dysplastic_m':parseInt(row[18]),
						'dysplastic_e':parseInt(row[19]),
						'auer_rods':parseInt(row[20]),
						'wbc':parseFloat(row[21]),
						'blast':parseFloat(row[22]),
						'fab':row[23],
						'ps':parseInt(row[24]),
						'ahd':parseInt(row[25]),
						'mds':parseInt(row[26]),
						'taml':parseInt(row[27]),
						'cd13':parseInt(row[28]),
						'cd19':parseInt(row[29]),
						'cd33':parseFloat(row[30]),
						'cd33_10':parseInt(row[31]),
						'cd33_50':parseInt(row[32]),
						'cd33_90':parseInt(row[33]),
						'cd34':parseFloat(row[34]),
						'cd34_10':parseInt(row[35]),
						'cd34_50':parseInt(row[36]),
						'cd34_90':parseInt(row[37]),
						'cd7':parseInt(row[38]),
						'cd10':parseInt(row[39]),
						'cd20':parseInt(row[40]),
						'hla_dr':parseInt(row[41]),
						'current_cytotoxic':parseInt(row[42]),
						'current_epigenetic':parseInt(row[43]),
						'current_targeted':parseInt(row[44]),
						'response_code':parseInt(row[45]),
						'cr_status':parseInt(row[46]),
						'courses_to_response':parseInt(row[47]),
						'off_study_reason_code':parseInt(row[48]),
						'status':parseInt(row[49]),
						'num_mutations':parseInt(row[50]),
						'os':parseFloat(row[51]),
						'os_censor':parseInt(row[52]),
						'rfs':parseFloat(row[53]),
						'rfs_censor':parseInt(row[54]),
						'efs':parseFloat(row[55]),
						'efs_censor':parseInt(row[56]),
						'mutations': {
							'DNMT3A':parseInt(row[57]),
							'TP53':parseInt(row[58]),
							'CEBPA':parseInt(row[59]),
							'IDH1':parseInt(row[60]),
							'SRSF2':parseInt(row[61]),
							'TET2':parseInt(row[62]),
							'RUNX1':parseInt(row[63]),
							'SF3B1':parseInt(row[64]),
							'FLT3':parseInt(row[65]),
							'RAD21':parseInt(row[66]),
							'U2AF1':parseInt(row[67]),
							'NRAS':parseInt(row[68]),
							'IDH2':parseInt(row[69]),
							'NPM1':parseInt(row[70]),
							'ASXL1':parseInt(row[71]),
							'NF1':parseInt(row[72]),
							'SETBP1':parseInt(row[73]),
							'KDR':parseInt(row[74]),
							'CBL':parseInt(row[75]),
							'WT1':parseInt(row[76]),
							'KRAS':parseInt(row[77]),
							'SMC3':parseInt(row[78]),
							'CBFB_MYH11':parseInt(row[79]),
							'KIT':parseInt(row[80]),
							'JAK2':parseInt(row[81]),
							'BCR_ABL1':parseInt(row[82]),
							'PHF6':parseInt(row[83]),
							'SMO':parseInt(row[84]),
							'ATM':parseInt(row[85]),
							'GATA2':parseInt(row[86]),
							'EZH2':parseInt(row[87]),
							'ZRSR2':parseInt(row[88]),
							'PML_RARA':parseInt(row[89]),
							'EGFR':parseInt(row[90]),
							'PTPN11':parseInt(row[91]),
							'APC':parseInt(row[92]),
							'BCOR':parseInt(row[93]),
							'SMC1A':parseInt(row[94]),
							'FGFR2':parseInt(row[95]),
							'STAG2':parseInt(row[96]),
							'RUNX1_RUNX1T':parseInt(row[97]),
							'ETV6_RUNX1':parseInt(row[98]),
							'MLH1':parseInt(row[99]),
							'KMT2A':parseInt(row[100]),
							'NOTCH1':parseInt(row[101]),
							'MPL':parseInt(row[102])
						},
						'num_methylation':parseInt(row[103]),
						'num_tumor':parseInt(row[104]),
						'num_myeloid':parseInt(row[105]),
						'num_spliceosome':parseInt(row[106]),
						'num_activated_signaling':parseInt(row[107]),
						'num_cohesin':parseInt(row[108]),
						'num_nucleophosmin':parseInt(row[109]),
						'num_chromatin':parseInt(row[110]),
						'num_transcription':parseInt(row[111])

					})
					

				}, function(error){
					console.log(error);
				}))
				.on('error', function(err){
					console.log(err);
				})
				.on('end',function(count){

				})

				console.log("Successfully uploaded " + count + " entries");
		}, 1000)
	}
})