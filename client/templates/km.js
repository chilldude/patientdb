Template.km.rendered = function() {
  /* globals */
  var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 600 - margin.left - margin.right,
    height = 340 - margin.top - margin.bottom;

  var x = d3.scale.linear()
      .range([0,width]);

  var y = d3.scale.linear()
      .range([height, 0]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

  var line = d3.svg.area()
      .x(function(d) {return x(d.month)})
      .y(function(d) {return y(d.probability)})

  line.interpolate('step-after');

  var svg = d3.select(".report-cluster").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // force float type
  osData.forEach(function(d){
    d.month = +d.month;
    d.probability = +d.probability;
  });

  var data = osData;

  // Returns the minimum and maximum value in the given array using natural order. 
  x.domain(d3.extent(data, function(d) {return d.month;}));
  y.domain(d3.extent(data, function(d) {return d.probability;})); // might not need this

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 8) // need to adjust
      .attr("dy", ".71em") //need to adjust
      .style("text-anchor", "end")
      .text("Survival (%)");

  //draw data as SVG path
  svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);

  //data points as circles
  svg.selectAll("circle")
      .data(data)
      .enter().append("svg:circle")
      .attr("cx", function(d) { return x(d.month)})
      .attr("cy", function(d) { return y(d.probability)})
      .attr("stroke-width", "none")
      .attr("fill", "orange")
      .attr("fill-opacity", .5)
      .attr("r", 3);
}