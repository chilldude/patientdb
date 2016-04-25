Meteor.subscribe("patients");

Template.admin.rendered = function() {

};

Template.admin.events({
	"change .csv_data": function(e,tmpl) {
		FS.Utility.eachFile(e,function(file){
			var theFile = new FS.File(file);
			Uploads.insert(theFile, function(err, fileObj) {
				if(!err) {
					Meteor.call('uploadFile', fileObj._id, file.name)
				}
			})
		})
	}
});

Template.admin.helpers({
	patients: function() {
		return Patients.find();
	}
});