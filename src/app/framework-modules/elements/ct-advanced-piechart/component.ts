import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
	selector: 'ct-advanced-piechart',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})

export class CtAdvancedPieChartComponent implements OnInit{
	 _metaData
	@Input() data:any[];
	@Input()
	set metaData(meta:AdvancedPieChartMetaData){
		this._metaData = Object.assign({},this.defaults,meta);
	}
	get chartMetaData(){
		return this._metaData
	}
	@Output() public selected = new EventEmitter<any>();
	
	private defaults: AdvancedPieChartMetaData = {
		view:[700,300],
		colorScheme:'natural',
		gradient:false,
		label: "Total"
	};

	ngOnInit(){
		
	}

	onSelect($event){
		this.selected.next($event);
	}

}


/**
 * this is an interface for chart data
 * @Input data -> this is the data that needs to be populated in the chart
 * data structure = [{name:'name1',value:'value1'}]
 * @Input chartdata -> this is the metadata about the pie chart
 */

export interface AdvancedPieChartMetaData{
	view:number[],
	gradient?:boolean,
	colorScheme?: 'vivid' | 'cool' | 'natural' | 'fire' | 'solar' | 'forest' | 'air' | 'aqua' | 'flame' | 'ocean' | 
	'horizon' | 'neons' | 'picnic' | 'night' | 'nightLights' | {
		domain: string[]
	},
	label?: string
}