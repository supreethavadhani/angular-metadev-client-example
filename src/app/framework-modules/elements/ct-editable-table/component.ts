import { Component, Input, Output, EventEmitter,ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { TableMetaData, CtTableComponent } from '../ct-table/component';
import { CtSpinner } from '../ct-spinner/component';


@Component({
	selector: 'ct-editable-table',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})

export class CtEditableTableComponent extends CtTableComponent{
	@Input() tableGridData:any;
	@Input() fullscreen: boolean=false;
	@ViewChild(MatTable,{static:true}) table: MatTable<any>;
	@ViewChild(MatSort, {static: true}) sort: MatSort;
	public tableData:TableMetaData = {data:[],metaData:{
		editable_columns:[],
		column_names:[],
		display_names:{}
	}};
	public dataSource:any;
	public tempDatasource: any;
	public editable: Array<any>;
	public control:FormControl;
	public controls:Array<any> =[];

	readonly separatorKeysCodes: number[] = [13, 9, 188];
	update(spinner?: CtSpinner) {
		this.tableGridData.data.forEach((element,idx) => {
			element['idx'] = idx;
		});
		this.tableData = this.tableGridData;
		this.tempDatasource = this.tableGridData.data;
		this.setEditableColumn()
		this.tempDatasource = this.tableGridData.data
		this.dataSource = new MatTableDataSource<any>(this.tableData.data);
		this.initFormControlArray();
		this.dataSource.sort = this.sort;
		if(spinner){
			setTimeout(()=>{
				spinner.hide();
			},0);
		}
	}
	
	setEditableColumn(){
		this.editable = [];
		this.tableData.metaData.column_names.forEach(element => {
			if(this.tableData.metaData.editable_columns.indexOf(element) > -1){
				this.editable.push(true)
			}
			else{
				this.editable.push(false);
			}
		});
		this.tableData.metaData.editable_columns
	}
	

	initFormControlArray(){
		this.tableData.data.forEach(element=>{
			let controller = {};
			this.tableData.metaData.editable_columns.forEach(col => {
				var validations = [];
				if(this.tableData.metaData.validations[col] != undefined){
					if(this.tableData.metaData.validations[col].maxLength != undefined){
						validations.push(Validators.maxLength(this.tableData.metaData.validations[col].maxLength))
					}
					if(this.tableData.metaData.validations[col].pattern != undefined){
						validations.push(Validators.pattern(this.tableData.metaData.validations[col].pattern))
					}
					if(this.tableData.metaData.validations[col].minLength != undefined){
						validations.push(Validators.minLength(this.tableData.metaData.validations[col].minLength))
					}
					if(this.tableData.metaData.validations[col].maxValue != undefined){
						validations.push(Validators.max(this.tableData.metaData.validations[col].maxValue))
					}
					if(this.tableData.metaData.validations[col].minValue != undefined){
						validations.push(Validators.min(this.tableData.metaData.validations[col].minValue))
					}
				}
				controller[col] = new FormControl('',validations);
				controller[col].markAsTouched();
				controller[col].value = (controller[col].value).trim();
			});
			this.controls.push(controller);
		})
	}
}

