import { Component, Input, Output, EventEmitter,ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Vo } from '../../formdata/form/types';
import { CtSpinner } from '../ct-spinner/component';


@Component({
	selector: 'ct-table',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})

export class CtTableComponent {
	@Input() tableGridData:TableMetaData;
	@Output() editAction = new EventEmitter<number>();
	@Output() viewAction = new EventEmitter<any>();
	@ViewChild(MatTable,{static:true}) table: MatTable<any>;
	@ViewChild(MatSort, {static: true}) sort: MatSort;
	
	public tableData:any = {data:[],metaData:{}};
	public dataSource:any;
	public values: Array<any> = [];
	public tempDatasource: any;
	public rowNumber:number;
	colored: any[] = []

	readonly separatorKeysCodes: number[] = [13, 9, 188];
	isView: string = 'auto';
	dropdownShow: boolean;
	filters: {} = {};
	columns: any;

	constructor(){
	}

	fetchRowNumberEdit(rowData) {
		this.rowNumber = this.tempDatasource.indexOf(rowData);
		this.editAction.next(this.rowNumber);
	  }
	  fetchRowNumberView(rowData) {
		this.rowNumber = this.tempDatasource.indexOf(rowData);
		this.viewAction.next(this.rowNumber);
	  }


	update(spinner?:CtSpinner) {
		this.isView = this.tableData.metaData.view ? 'pointer' : 'auto'
		this.tableData = this.tableGridData;
		this.columns = this.tableData.metaData.column_names
		this.columns.forEach(key => {
			this.filters[key] = true;
		});
		if(this.tableData.metaData.buttonName == undefined){
			this.tableData.metaData.buttonName = "EDIT"
		}
		if(this.tableData.metaData.styleAttribute != undefined){
			this.colored = Object.keys(this.tableData.metaData.styleAttribute);
		}
		this.tempDatasource = this.tableGridData.data;
		this.editColumn();
		this.tempDatasource = this.tableGridData.data
		this.dataSource = new MatTableDataSource<any>(this.tableData.data);
		this.dataSource.sort = this.sort;
		
		if(spinner){
			setTimeout(()=>{
				spinner.hide();
			},0);
		}
	  }
	  
	  editColumn(){
		this.tableData.metaData.column_names as any[];
		if (this.tableData.metaData.edit && this.tableData.metaData.column_names[this.tableData.metaData.column_names.length -1]!='edit') {
			this.tableData.metaData.column_names = this.tableData.metaData.column_names.concat(['edit']);
		  } 
	  }

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	  }

	add(event: MatChipInputEvent): void {
		const input = event.input;
		const value = event.value;
	
		if ((value || '').trim()) {
		  this.values.push(value.trim());
		  this.applyValues(this.values)
		}
		if (input) {
		  input.value = '';
		}
	  }
	
	remove(value): void {
		const index = this.values.indexOf(value);
		if (index >= 0) {
			this.values.splice(index, 1);
			this.applyValues(this.values)
		}
		if (this.values.length == 0) {
			this.dataSource.filter = '';
		}
	}

	applyValues(value) {
		this.dataSource.data = this.tempDatasource
		for (var i = 0; i < value.length; i++) {
			this.dataSource.filter = value[i].trim().toLowerCase();
			this.dataSource.data = this.dataSource.filteredData;
		}
	}

	getStyle(colName, data, rowData){
		if(this.colored.includes(colName)){
			var colname:any[] = this.tableData.metaData.styleAttribute[colName];
			for(var i=0;i<colname.length;i++) {
				var dependentCol = colname[i]['dependentCol'];
				if(dependentCol) {
					var comp=colname[i]['comp'];
					switch(comp) {
						case '=':{
							if(rowData[dependentCol] == colname[i]['value']) {
								var style = colname[i]['style'];
								return $.extend({'cursor': this.isView },style)
							}
							break;
						}
						case '<':{
							if(rowData[dependentCol] < colname[i]['value']) {
								var style = colname[i]['style'];
								return $.extend({'cursor': this.isView },style)
							}
							break;
						}
						case '>':{
							if(rowData[dependentCol] > colname[i]['value']) {
								var style = colname[i]['style'];
								return $.extend({'cursor': this.isView },style)
							}
							break;
						}
					}
				}
				else {
					var comp=colname[i]['comp'];
					switch(comp) {
						case '=':{
							if(colname[i]['value'] == data) {
								var style = colname[i]['style'];
								return $.extend({'cursor': this.isView },style)
							}
							break;
						}
						case '<':{
							if(colname[i]['value'] < data) {
								var style = colname[i]['style'];
								return $.extend({'cursor': this.isView },style)
							}
							break;
						}
						case '>':{
							if(colname[i]['value'] > data) {
								var style = colname[i]['style'];
								return $.extend({'cursor': this.isView },style)
							}
							break;
						}
					}
				}
			}
		}
		else {
			return {'cursor': this.isView };
		}
	}


	toggleDropdown(){
		this.dropdownShow = !this.dropdownShow;
	}

	changeFilter(column){
		this.filters[column] = !this.filters[column];
		this.getFilterPredicate();
	}

	getFilterPredicate(){
		var toBeFiltered = []
		Object.keys(this.filters).forEach(c =>{
			this.filters[c] ? toBeFiltered.push(c) : null;
		});
		toBeFiltered.length == 0 ? toBeFiltered = this.columns : toBeFiltered = toBeFiltered;
		this.dataSource.filterPredicate = function(data, filter: string): boolean {
		return toBeFiltered.some(function(column) { return data[column] ? data[column].toString().toLowerCase().includes(filter) : false});
		};
		this.applyValues(this.values)
	}

	gotoFullScreen(){
		var element = document.getElementById("tableContainer")
		element.setAttribute('style', "height: auto;");
	}
}

export interface TableMetaData{
	data:Vo[],
	metaData:{
		column_names:string[],
		display_names:{[key:string]:string},
		editable_columns?:string[],
		badgesColumn?:string,
		disableBadges?:boolean,
		allSelected?:boolean,
		view?:boolean,
		edit?:boolean,
		search?:boolean,
		placeholder?:string,
		selectAttr?:string,
		error?:string,
		buttonName?: string,
		validations?:{[key:string]: Validators},
		managerFunction?: string,
		itemName?: string,
		styleAttribute?: { [key:string]: Array<StyleComparison> }
	},	
}

export interface StyleComparison {
	comp: '=' | '>' | '<' | '>=' | '<=' | '!=',
	value: any,
	dependentCol?: string,
	style: any,
}

export interface Validators{
	minLength?:number,
	maxLength?:number,
	minValue?:number,
	maxValue?:number,
	pattern?:string,
}
