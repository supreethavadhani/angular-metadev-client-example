import { Component, Input, OnInit } from '@angular/core';



@Component({
	selector: 'ct-piechart',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})

export class CtPieChartComponent{
	// Pie Chart Data 
	data:any[];
	colorScheme:unknown;
	@Input() pieChartData:any[];
	@Input() pieChartMetaData:PieChartMetaData= {
		view:[],
		showLabels:true,
		isDoughnut:false,
		colorScheme:'',
		legendPosition:'',
		gradient:true,
		showLegend:true
	};

}


/**
 * this is an interface for chart data
 * @Input data -> this is the data that needs to be populated in the chart
 * data structure = [{name:'name1',value:'value1'}]
 * @Input chartdata -> this is the metadata about the pie chart
 */

export interface PieChartMetaData{
	view:number[],
	showLabels: boolean,
	isDoughnut: boolean,
	legendPosition: string,
	gradient:boolean,
	showLegend:boolean,
	colorScheme:unknown
}