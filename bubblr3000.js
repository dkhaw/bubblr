function Bubblr3000() {

	var margin = { left: 95, top: 5, right: 10, bottom: 85 },
		height = 600 - margin.bottom - margin.top,
		width = 600 - margin.left - margin.right,
		xScale = d3.scale.linear(),
		yScale = d3.scale.linear(),
		radiusScale = d3.scale.linear(),
		xAxis = d3.svg.axis().scale(xScale).orient('bottom').ticks(5, 's').outerTickSize(1),
		yAxis = d3.svg.axis().scale(yScale).orient('left').tickFormat(d3.format('.2s')).outerTickSize(1),
		x, xLabel, y, yLabel, radius, color, key;

	function bubblr(selection) {

	    var plotWidth  = 960  - margin.left - margin.right;
	    var plotHeight = 500 - margin.top  - margin.bottom;

	    xScale.range([0, plotWidth]);
	    yScale.range([plotHeight, 0]);
	    radiusScale.range([2, 15]);

	    selection.each(function(data) {

			var svg = d3.select(this).selectAll('svg').data([data]);
			var g = svg.enter().append('svg').append('g');

			g.append('g')
			.attr('class', 'x axis')
			.append('text')
			.attr('class', 'label')
			.style('text-anchor', 'middle');

			g.append('g')
			.attr('class', 'y axis')
			.append('text')
			.attr('class', 'label')
			.style('text-anchor', 'middle');

			xScale.domain(d3.extent(data, function(d) { return d[x]; }));
			yScale.domain(d3.extent(data, function(d) { return d[y]; }));
			radiusScale.domain(d3.extent(data, function(d) { return d[radius]; }));

			svg.attr('width', 960).attr('height', 500);

			g.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

			g.select('.x.axis')
			.attr('transform', 'translate(0,' + plotHeight + ')')
			.call(xAxis)
			.select('text')
			.attr('x', plotWidth / 2)
			.attr('y', 45)
			.text(xLabel);

			g.select('.y.axis')
			.call(yAxis)
			.select('text')
			.attr('transform', 'translate(-' + 50 + ',' + (plotHeight / 2) + ') rotate(-90)')
			.text(yLabel);

			var circles = g.selectAll('circle').data(data);

			circles.enter().append('svg:circle')
			.attr('cy', function(d) { return plotHeight; })
			.attr('r', 2)
			.attr('fill', function(d) { return color; })
			.style('opacity', .3)
			.append("svg:title")
   			.text(function(d) { return d[key]; });

			circles.exit().remove();

			circles.transition()
			.duration(1500)
			.attr('cx', function(d) { return xScale(d[x]); })
			.attr('cy', function(d) { return yScale(d[y]); })
			.attr('r', function(d) { return radiusScale(d[radius]); });

		});
	}

	bubblr.x = function(value) {
		if (!arguments.length) return x;
		x = value;
		return bubblr;
	};

	bubblr.xLabel = function(value) {
		if (!arguments.length) return xLabel;
		xLabel = value;
		return bubblr;
	};

	bubblr.y = function(value) {
		if (!arguments.length) return y;
		y = value;
		return bubblr;
	};

	bubblr.yLabel = function(value) {
		if (!arguments.length) return yLabel;
		yLabel = value;
		return bubblr;
	};

	bubblr.radius = function(value) {
		if (!arguments.length) return radius;
		radius = value;
		return bubblr;
	};

	bubblr.color = function(value) {
		if (!arguments.length) return color;
		color = value;
		return bubblr;
	};

	bubblr.key = function(value) {
		if (!arguments.length) return key;
		key = value;
		return bubblr;
	};

	return bubblr;
}