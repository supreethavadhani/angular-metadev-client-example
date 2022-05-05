import { Component, Input, ViewChild, Output, EventEmitter} from '@angular/core';
import { FormData } from '../../formdata/form/formData';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import * as _ from 'lodash';

@Component({
  selector: 'ct-searchbar-fd',
  templateUrl: "./component.html",
  styleUrls: ['./component.scss']
})


export class CtSearchBarFdComponent {
	fdArray: any = [];
	@Input()
	get fd(){
		return this.fdArray;
	}
	set fd(value){
		this.fdArray = value;
		this.cumulativeData = _.cloneDeep(this.formData(this.fdArray));
		this.dataSource = new MatTableDataSource<any>(this.cumulativeData);
		this.fdChange.emit(this.fdArray);
	}
	@Output() fdChange = new EventEmitter<any>();
	@Input() placeholder: string;
	@Output() filtered= new EventEmitter<any>();
	public cumulativeData:Array<any> = [];
	public dataSource:any;
	public values: Array<any> = [];
	readonly separatorKeysCodes: number[] = [13, 9, 188];

  constructor() {}
	
	formData(fdArray){
		var voArray = [];
		fdArray.forEach( element => {
			voArray.push(element.getRawData());
		});
		return voArray
	}

  applyFilter(filterValue: string) {
		this.cumulativeData = _.cloneDeep(this.formData(this.fdArray));
		this.dataSource.data = _.cloneDeep(this.cumulativeData);
		this.dataSource.filter = filterValue.trim().toLowerCase();
		var filtered = []
		this.dataSource.filteredData.forEach(element => {
			filtered.push(
				this.fdArray[this.dataSource.data.indexOf(element)]
			)
		});
		this.filtered.emit(filtered);
	}

	add(event: MatChipInputEvent): void {
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
		this.cumulativeData = _.cloneDeep(this.formData(this.fdArray));
		this.dataSource.data = _.cloneDeep(this.cumulativeData);
		for (var i = 0; i < value.length; i++) {
		  	this.dataSource.filter = value[i].trim().toLowerCase();
				this.dataSource.data = this.dataSource.filteredData;
				var filtered = []
				this.dataSource.filteredData.forEach(element => {
				filtered.push(
					this.fdArray[this.cumulativeData.indexOf(element)]
				)
			});
			this.filtered.emit(filtered);
		}
		
	}
}
