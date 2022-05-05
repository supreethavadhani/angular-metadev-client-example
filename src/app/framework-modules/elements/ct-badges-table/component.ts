import { Component, Input, Output, EventEmitter,ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';


@Component({
	selector: 'ct-badges-table',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})

export class CtBadgesTableComponent {
	@Input() tableGridData:any;
	@Output() editAction = new EventEmitter<number>();
	@Output() viewAction = new EventEmitter<any>();
	@ViewChild(MatTable,{static:true}) table: MatTable<any>;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	public tableData:any = {data:[],metaData:{}};
	public dataSource:any;
	public values: Array<any> = [];
	public tempDatasource: any;
    public rowNumber:number;
    badgeCol: number;

	readonly separatorKeysCodes: number[] = [13, 9, 188];
    
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


	update() {
		this.tableData = this.tableGridData;
		this.tempDatasource = this.tableGridData.data;
        this.editColumn();
        this.badgeColumn();
		this.tempDatasource = this.tableGridData.data
		this.dataSource = new MatTableDataSource<any>(this.tableData.data);
		this.dataSource.sort = this.sort;
	  }
	  
	  editColumn(){
		if (this.tableData.metaData.edit) {
			this.tableData.metaData.column_names = this.tableData.metaData.column_names.concat(['edit']);
		  } 
      }
      
	badgeColumn(){
		if(this.tableData.metaData.badgesColumn != undefined){
			this.badgeCol = this.tableData.metaData.column_names.indexOf(this.tableData.metaData.badgesColumn);
			if(typeof(this.tableData.data[0][this.tableData.metaData.badgesColumn]) != typeof({})){
				this.tableData.data.forEach(element => {
					var converted = [{
						"name": element[this.tableData.metaData.badgesColumn], 
						"key": element[this.tableData.metaData.badgesColumn], 
						"value": false
					}];
					element[this.tableData.metaData.badgesColumn] = converted;
				});
			}	
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

	select($event,index){
		this.dataSource.data[index][this.tableData.metaData.badgesColumn] = $event;
	}
}

