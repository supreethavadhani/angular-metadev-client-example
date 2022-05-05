import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'events';
import { Field } from '../../formdata/form/form';
import { FormData } from '../../formdata/form/formData';
import { MatOption } from '@angular/material/core';



@Component({
	selector: 'ct-dropdown',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})
export class CTDropDownComponent {
	@Input() public field: Field;
	@Input() public fd: FormData;
	@Input() public multiselect: boolean = false;
	@Output() public valueChange = new EventEmitter<String>();
	@Output() public textChange = new EventEmitter<String>();
	@Output() public changeListener = new EventEmitter<any>();
	public control: FormControl;

	ngOnInit() {
		this.control = this.fd.formGroup.get(this.field.name) as FormControl;
		this.control.valueChanges.subscribe(value => {
			this.changeListener.next(value)
		});
	}
	currentValue(value) {
		this.valueChange.next(value);
	}

	currentText($event){
		this.textChange.next(($event.source.selected as MatOption).viewValue);
	}

}

