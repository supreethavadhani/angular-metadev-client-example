import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
	selector: 'ct-number-card',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})

export class CtNumberCardComponent implements OnInit{
	 _metaData
	@Input() data:any[];
	@Input()
	set metaData(meta:NumberCardMetaData){
		this._metaData = Object.assign({},this.defaults,meta);
	}
	get chartMetaData(){
		return this._metaData
	}
	@Output() public selected = new EventEmitter<any>();
	
	colorScheme ={
		domain:['#cad4f4', '#c7e5ee', '#bce7da']
	}
	  cardColor: string = 'rgba(199, 229, 238, 0.4)';

	private defaults: NumberCardMetaData = {
		view:[200,300],
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

export interface NumberCardMetaData{
	view:number[],
	gradient?:boolean,
	colorScheme?: 'vivid' | 'cool' | 'natural' | 'fire' | 'solar' | 'forest' | 'air' | 'aqua' | 'flame' | 'ocean' | 
	'horizon' | 'neons' | 'picnic' | 'night' | 'nightLights' | {
		domain: string[]
	},
	label?: string
}