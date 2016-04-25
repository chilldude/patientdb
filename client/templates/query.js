var entriesCount = 0;

Template.query.onRendered( function() {

    selectLeukemia = $(".select-leukemia-type").select2({
      placeholder: "Select leukemia types"
    });

    selectFab = $(".select-fab").select2({
      placeholder: "Select FAB classifications"
    });

    selectMutations = $(".select-mutations").select2({
      placeholder: "Select mutations"
    });
    
    

  });
  
Template.query.helpers({
   'entriesCount': function(){
       return entriesCount;
   } 
});

Template.query.events({
  'change .new-query': function (e) {
    e.preventDefault();
    entriesCount = Patients.find({}).count();

  },

  'submit .new-query': function (e) {
    // increment the counter when button is clicked
    e.preventDefault();
    
    //console.log(e.target.elements)

    var options = {};

    //get standard elements
    var elem = e.target.elements;
    for(var i = 0; i < elem.length; i++)
    {

      key = elem[i].id;

      //get checkbox values
      if ((elem[i].type == "checkbox" && elem[i].checked)) {
        
        var checkValue = elem[i].value in ["0","1","2","3","4","5","6"] ? parseInt(elem[i].value) : elem[i].value;

        if(!options[key]) {
          options[key] = {
            $in: [checkValue]
          };
        } else {
          options[key].$in = options[key].$in.concat([checkValue]);
        }
      }

      //get text input values  (ranges)
      else if ((elem[i].type=="number" && elem[i].value)) {

        var textValue = elem[i].value;

        if(!options[key]) {
          options[key] = textValue;
        } else {
          var prevValue = options[key];
          options[key] = {
            $gte: Math.min(prevValue, textValue),
            $lte: Math.max(prevValue, textValue)
          }
        }
      }

    }
    
    /* temporary loop logic. clunky */
    var multiSelect = [selectLeukemia, selectFab];

    for (var i = 0; i < multiSelect.length; i++) {
      if (multiSelect[i].val()) {

        options[multiSelect[i][0].id] = {
          $in: multiSelect[i].val()
        }
        
      }
    }

    /* specific case for mutation search */
    if (selectMutations.val()){

      var mutationQuery = {}

      for (var i =0; i < selectMutations.val().length; i++) {
        var key = "mutations." + selectMutations.val()[i];

        options[key] = 1;
      }
    }

    var query = Patients.find(options, {sort: {os: 1}});

    //console.log(query);

    //data for KM
    osData = []

    //data for mutation chart
    mutationData = {}


    // get data for km

    if (query.count() != 0) {
        osData = [{"month": 0, "probability": 100}] // bootstrap initial value
    }
    totalEntries = query.count();
    remaining = totalEntries;
    query.forEach(function(patient){

      
      if (!isNaN(patient.os_censor) && !isNaN(patient.os)) {
        remaining = (patient.os_censor == 1) ? remaining-1 : remaining;
        var entry = {
          "month": patient.os,
          "probability": (remaining/totalEntries) * 100
        }
        osData.push(entry);
      }

      // get data for mutation chart
      for (mutation in patient.mutations) {
        if (patient.mutations[mutation] ==1) {
          mutation in mutationData ? mutationData[mutation] +=1 : mutationData[mutation] = 1;
        }
      }

    });

    console.log(mutationData);


    //console.log(options);
    //console.log("Found " + totalEntries + " entries");
    //console.log(OS_data);

    // Go to report
    FlowRouter.go('/report');
  }
});
