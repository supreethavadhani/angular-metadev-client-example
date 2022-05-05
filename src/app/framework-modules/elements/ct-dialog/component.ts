import { Component, Input, Output, EventEmitter} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
	selector: 'ct-dialog',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})

export class CtDialogComponent {
	@Output() public save = new EventEmitter<any>();
	@Input() public title:string; 
	@Input() public content:string;
	@Input() public primary:string='save';
	constructor(public dialogRef: MatDialogRef<CtDialogComponent>) {	
}

	doPrimary(){
		this.save.next();
	}
	close(): void {
	this.dialogRef.close();
	}
   }