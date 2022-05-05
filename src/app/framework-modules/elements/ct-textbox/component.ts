import { Component, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Field } from '../../formdata/form/form';
import { FormData } from '../../formdata/form/formData';



@Component({
	selector: 'ct-textbox',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})

export class CTTextboxComponent {
	@Input() public field: Field;
	@Input() public fd: FormData;
	@Input() public type:string;
	@Output() public valueChange = new EventEmitter<any>();


	control:FormControl;
	
	ngOnInit() {
		this.control = this.fd.formGroup.get(this.field.name) as FormControl;
	}
	valueChangeDetector($event){
		this.valueChange.next(this.fd.getFieldValue(this.field.name));
	}
}

