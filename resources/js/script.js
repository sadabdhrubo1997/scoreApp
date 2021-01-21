
/*
let data = {
	// A labels array that can contain any sort of values
	labels: ['10/12/2020', '12/12/2020', '14/12/2020', '16/12/2020', '18/12/2020', '20/12/2020'],
	// Our series array that contains series objects or in this case series data arrays

	series: [
		[10, 12, 12, 14, 14, 16],
		[16, 14, 14, 16, 16.5, 20]
	]
};

let myChart = document.querySelector(".ct-chart-line")

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

	

/*
	chart.on('draw', function(data) {
		if(data.type === 'line' || data.type === 'area') {
		  data.element.animate({
			d: {
			  begin: 2000 * data.index,
			  dur: 2000,
			  from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
			  to: data.path.clone().stringify(),
			  easing: Chartist.Svg.Easing.easeOutQuint
			}
		  });
		}
	}
	

};



var chart = new Chartist.Line('#myChart', data, options);


*/



var chart = new Chartist.Line('#myChart', {
	labels: ['10/12/2020', '12/12/2020', '14/12/2020', '16/12/2020', '18/12/2020', '20/12/2020'],	
	series: [
		[10, 12, 12, 14, 14, 16],
		[16, 14, 14, 16, 16.5, 20]
	]
  }, {
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
	
  });
  

  
		
		chart.on('draw', function(data) {
			if(data.type === 'line' || data.type === 'area') {
			  data.element.animate({
				d: {
				  begin: 2000 * data.index,
				  dur: 2000,
				  from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
				  to: data.path.clone().stringify(),
				  easing: Chartist.Svg.Easing.easeOutQuint
				}
			  });
			}
		  });
		