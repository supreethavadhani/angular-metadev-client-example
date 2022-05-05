import { Component, Input } from '@angular/core';



@Component({
	selector: 'ct-piegridchart',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})

export class CtPieGridChartComponent{
	_metaData: PieGridChartMetaData;
	@Input() data:{}[];
	@Input() 
	set metaData(meta:PieGridChartMetaData){
		this._metaData = Object.assign({},this.defaults,meta);
	}
	get chartMetaData(){
		return this._metaData
	}
	private defaults:PieGridChartMetaData=  {
		view: [500,300],
		colorScheme:{
			domain: ['#cad4f4', '#c7e5ee', '#bce7da', '#dfedcc', '#f7eac3', '#faddcb', '#f6c2bc','#f3a7ab','#EE958F']
		},
		label: "Total",
		designatedTotal: undefined
	};


}

/**
 * this is an interface for chart data
 * @Input data -> this is the data that needs to be populated in the chart
 * data structure = [{name:'name1',value:'value1'}]
 * @Input chartdata -> this is the metadata about the pie chart
 */

export interface PieGridChartMetaData{
	view: number[],
	colorScheme?: 'vivid' | 'cool' | 'natural' | 'fire' | 'solar' | 'forest' | 'air' | 'aqua' | 'flame' | 'ocean' | 
	'horizon' | 'neons' | 'picnic' | 'night' | 'nightLights' |{
		domain: string[]
	},
	label?: string,
	designatedTotal?: number | undefined
}