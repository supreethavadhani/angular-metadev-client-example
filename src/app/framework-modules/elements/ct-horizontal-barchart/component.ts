import { Component, Input, Output, EventEmitter, OnInit, TemplateRef} from '@angular/core';



@Component({
	selector: 'ct-horizontal-barchart',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})

export class CtHorizontalBarChartComponent implements OnInit{
	_chartMetaData: HorizontalBarChartMetaData;
	@Input() data:any[];
	@Input() 
	set metaData(meta:HorizontalBarChartMetaData){
		this._chartMetaData = Object.assign({},this.defaults,meta);
	}
	get chartMetaData(){
		return this._chartMetaData
	}
	
	private defaults: HorizontalBarChartMetaData = {
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
			domain: ['#cad4f4', '#c7e5ee', '#bce7da', '#dfedcc', '#f7eac3', '#faddcb', '#f6c2bc','#f3a7ab','#EE958F']
		},
		legendTitle: 'Legend',
		legendPosition: 'right',
		dataLabel: true,
		customToolTip: false,
		xScaleMax: 0
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

export interface HorizontalBarChartMetaData{
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
	dataLabel?: boolean,
	customToolTip?: boolean,
	xScaleMax?: number
}