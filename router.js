FlowRouter.route('/admin/', {
	name: 'admin',
	action: function() {
		BlazeLayout.render("mainLayout", {content: "admin"});
	}
});
FlowRouter.route('/', {
	name: 'home',
	action: function() {
		BlazeLayout.render("mainLayout", {content: "landing"});
	}
});

FlowRouter.route('/query', {
	name: 'query',
	action: function() {
		BlazeLayout.render("mainLayout", {content: "query"});
	}
});

FlowRouter.route('/report/', {
	name: 'report',
	action: function() {
		BlazeLayout.render("mainLayout", {content: "report"});
	}
});

FlowRouter.route('/user/',{
	name: ' user',
	action: function() {
		BlazeLayout.render("mainLayout", {content: "report"});
	}
});

FlowRouter.route('/bookmarks/', {
	name: 'bookmarks',
	action: function() {
		BlazeLayout.render("mainLayout", {content:"bookmarks"});
	}
});
