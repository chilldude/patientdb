Meteor.publish("patients", function(){
	return Patients.find({}, {limit:300});
});