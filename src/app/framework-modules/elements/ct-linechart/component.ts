import { Component, Input, Output, EventEmitter, OnInit, TemplateRef} from '@angular/core';



@Component({
	selector: 'ct-linechart',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})

export class CtLineChartComponent implements OnInit{
	_chartMetaData: LineChartMetaData;
	@Input() data:any[];
	@Input() 
	set metaData(meta:LineChartMetaData){
		this._chartMetaData = Object.assign({},this.defaults,meta);
	}
	get chartMetaData(){
		return this._chartMetaData
	}
	
	private defaults: LineChartMetaData = {
		view: [700,300],
		gradient:false,
		showLegend:true,
		showXAxis:true,
		showXAxisLabel:true,
		showYAxis:true,
		showYAxisLabel:true,
		xAxisLabel:'X',
		yAxisLabel:'Y',
		scheme: {
			domain: ['#004FAA', '#ec8026', '#d6ff79', '#89aae6', '#AC808A', '#1b998b', '#5cc8f']
		},
		legendTitle: 'Legend',
		legendPosition: 'right',
		customToolTip: false,
		yScaleMax: undefined
	};

	@Output() public selected = new EventEmitter<any>();

	ngOnInit(){
		
	}

	onSelect($event){
		this.selected.next($event);
	}

	getToolTip(name: string){
		var element = this.data.find(d => d.name === name);
		return element.tooltipText || element.name + ' : ' + element.value;
	}

}

/**
 * this is an interface for chart data
 * @Input data -> this is the data that needs to be populated in the chart
 * data structure = [{name:'name1',value:'value1',tooltipText: 't1'}]
 * @Input chartdata -> this is the metadata about the bar chart
 */

export interface LineChartMetaData{
	view: number[],
	scheme?: 'vivid' | 'cool' | 'natural' | 'fire' | 'solar' | 'forest' | 'air' | 'aqua' | 'flame' | 'ocean' | 
		'horizon' | 'neons' | 'picnic' | 'night' | 'nightLights' |{
			domain: string[]
		},
	gradient?: boolean,
	showXAxis?: boolean,
	showYAxis?: boolean,
	showLegend?: boolean
	showXAxisLabel?: boolean,
	showYAxisLabel?: boolean,
	xAxisLabel: string,
	yAxisLabel: string,
	legendTitle?: string,
	legendPosition?: 'right' | 'below',
	customToolTip?: boolean,
	yScaleMax?: number | undefined;
}