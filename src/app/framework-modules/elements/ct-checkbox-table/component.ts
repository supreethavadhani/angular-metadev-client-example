import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { WritePropExpr } from '@angular/compiler';
import { CtTableComponent, TableMetaData } from '../ct-table/component';
import { CtSpinner } from '../ct-spinner/component';


@Component({
	selector: 'ct-checkbox-table',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})

export class CtCheckboxTableComponent extends CtTableComponent {
	@Input() tableGridData: TableMetaData;
	@Output() selected = new EventEmitter<{}[]>();
	@Output() manager = new EventEmitter<any>();
	@ViewChild(MatTable, { static: true }) table: MatTable<any>;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	public tableData: any = { data: [], metaData: {} };
	public dataSource: MatTableDataSource<any>;
	public values: Array<any> = [];
	public tempDatasource: any;
	selectedCount: number = 0;

	update(spinner?: CtSpinner) {
		this.tableData = this.tableGridData;
		if(this.tableData.metaData.column_names.indexOf("select") == -1){ this.tableData.metaData.column_names.unshift("select"); }
		this.tempDatasource = this.tableGridData.data;
		this.editColumn();
		this.tempDatasource = this.tableGridData.data
		this.dataSource = new MatTableDataSource<any>(this.tableData.data);
		this.dataSource.sort = this.sort;
		this.defaultSelected();
		if (spinner) {
			setTimeout(() => {
				spinner.hide();
			}, 0);
		}
	}

	defaultSelected() {
		this.selectedCount = 0;
		let tempSelected = [];
		this.tableData.data.forEach((element, index) => {
			if (element[this.tableGridData.metaData.selectAttr]) {
				tempSelected.push(element);
				this.selectedCount += 1;
			}
			this.selection = new SelectionModel<any>(true, tempSelected);
		});
	}

	public selection = new SelectionModel<any>(true, []);

	/** Whether the number of selected elements matches the total number of rows. */
	isAllSelected() {
		const numSelected = this.selection.selected.length;
		const numRows = this.dataSource.filteredData.length;
		return numSelected === numRows;
	}

	/** Selects all rows if they are not all selected; otherwise clear selection. */
	masterToggle() {
		this.selectedCount = 0
		if(this.isAllSelected()){
			this.selection.clear()
		}
		else{
			this.dataSource.filteredData.forEach(row => {this.selection.select(row);this.selectedCount += 1;});
		}	
	}

	/** The label for the checkbox on the passed row */
	checkboxLabel(row?: any): string {
		if (!row) {
			return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
		}
		return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
	}

	emitSelected(row) {
		this.selection.isSelected(row) ? this.selectedCount += 1 : this.selectedCount -= 1; 
		row[this.tableGridData.metaData.selectAttr] = !row[this.tableGridData.metaData.selectAttr];
		this.selected.next(this.selection.selected);
	}

	emitAllSelected() {
		this.toggleAllSelected();
		this.selected.next(this.selection.selected);
	}

	toggleAllSelected() {
		if (this.selection.selected.length != 0) {
			this.tableData.data.forEach(element => {
				element[this.tableGridData.metaData.selectAttr] = true;
			});
		}
		else {
			this.tableData.data.forEach(element => {
				element[this.tableGridData.metaData.selectAttr] = false;
			});
		}
	}

	log($event){
	}

	emitFunction(){
		this.manager.emit(true);
	}
}

