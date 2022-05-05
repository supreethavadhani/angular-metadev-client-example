import { Component, Input, Output, EventEmitter, OnInit, TemplateRef} from '@angular/core';
import { format } from 'path';



@Component({
	selector: 'ct-linear-gauge',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})

export class CtLinearGaugeComponent implements OnInit{
	_chartMetaData: LinearGaugeMetaData;
	@Input() 
	set metaData(meta:LinearGaugeMetaData){
		this._chartMetaData = Object.assign({},this.defaults,meta);
	}
	get chartMetaData(){
		return this._chartMetaData
	}
	
	private defaults: LinearGaugeMetaData = {
		view: undefined,
		format: this.format,
		units: 'Completed',
		value: 69,
		scheme: {
			domain: ['#004FAA']
		}
	};

	@Output() public selected = new EventEmitter<any>();

	ngOnInit(){
		
	}

	onSelect($event){
		this.selected.next($event);
	}

	format(data){
		return data + '%';
	}

}

/**
 * this is an interface for chart data
 * @Input data -> this is the data that needs to be populated in the chart
 * data structure = [{name:'name1',value:'value1',tooltipText: 't1'}]
 * @Input chartdata -> this is the metadata about the bar chart
 */

export interface LinearGaugeMetaData{
	view?: number[] | undefined,
	scheme?: 'vivid' | 'cool' | 'natural' | 'fire' | 'solar' | 'forest' | 'air' | 'aqua' | 'flame' | 'ocean' | 
		'horizon' | 'neons' | 'picnic' | 'night' | 'nightLights' |{
			domain: string[]
		},
	value: number,
	format?: Function,
	units: string,
}