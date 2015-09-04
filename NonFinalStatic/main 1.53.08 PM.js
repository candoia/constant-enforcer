'use strict';	
let json = api.boa.run('number_of_Static-not-Final.boa');
$('#loading').hide();
$('#content').show();
let count = 0;
let labels = [];
let dataset = [];
for(let index in json.out["[]"]) {
	count++;
	let label = 
		$('#table-output-body').append(`<tr><td> ${count} </td> <td> ${index} </td> <td> ${json.out["[]"][index]} </td> </tr>`)
		labels.push(index);
	dataset.push(json.out["[]"][index]);
}
let chartData = {
		labels: labels,
		datasets: [{
			fillColor: '#ff8080',
			strokeColor: '#bf6060',
			data: dataset
		}]
}



var heightofCanvas=(count / 5)*100 + 400;
var widthofCanvas=(count / 5)*100 + 300;




var heightAsString=Math.floor( heightofCanvas ).toString()+'px';
var widthAsString=Math.floor( widthofCanvas ).toString()+'px';


let canvas = document.createElement('canvas');
canvas.setAttribute('width', heightAsString);
canvas.setAttribute('height', widthAsString);
canvas.id = "chart-output";
content.appendChild(canvas);

let ctx = canvas.getContext('2d');
new Chart(ctx).Bar(chartData);




