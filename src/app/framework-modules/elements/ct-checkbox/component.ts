import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Field } from '../../formdata/form/form';
import { FormData } from '../../formdata/form/formData';



@Component({
	selector: 'ct-checkbox',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})
export class CtCheckboxComponent {
	@Input() public field: Field;
	@Input() public fd: FormData;
	@Output() public valueChange = new EventEmitter<boolean>();
	@Output() public changeListener = new EventEmitter<any>();
	public control: FormControl;
	public isChecked:boolean = false;

	ngOnInit() {
		this.control = this.fd.formGroup.get(this.field.name) as FormControl;
		this.isChecked = this.control.value == true;
		this.control.valueChanges.subscribe(value => {
			this.changeListener.next(value)
		});
	}
	changed(){
		this.isChecked = this.control.value == true;
		this.valueChange.next(this.control.value);
	}
}

