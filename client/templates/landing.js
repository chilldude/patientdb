Template.landing.events({
	'click .btn-get-started' :function(e) {
		e.preventDefault();

		FlowRouter.go('/query');
	}
});