Template.mutationsChart.rendered = function(){
	/* globals */
  var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 600 - margin.left - margin.right,
    height = 340 - margin.top - margin.bottom;


	var x = d3.scale.ordinal()
			.rangeBoundBands([0, width], .1)
}
