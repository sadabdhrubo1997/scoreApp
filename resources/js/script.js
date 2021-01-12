let data = {
	// A labels array that can contain any sort of values
	labels: ['10/12/2020', '12/12/2020', '14/12/2020', '16/12/2020', '18/12/2020', '20/12/2020'],
	// Our series array that contains series objects or in this case series data arrays

	series: [
		[10, 12, 12, 14, 14, 16],
		[16, 14, 14, 16, 16.5, 20]
	]
};

let options = {
	lineSmooth: false,
	high: 20,
	low: 10,
	fullWidth: true,
	axisX: {
		showGrid: true,
		showLabel: true
	},
	axisY: {
		onlyInteger: true,
		scaleMinSpace: 50,

		labelInterpolationFnc: function (value) {
			return '$' + value + 'k';
		}
	},

	chartPadding: {
		top: 15,
		right: 30,
		bottom: 0,
		left: 0
	}
};

new Chartist.Line('#myChart', data, options);