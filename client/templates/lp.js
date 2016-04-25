Template.header.events({
	"click .btn-new-query": function(e) {
		e.preventDefault();

		FlowRouter.go('/query');
	}
})
