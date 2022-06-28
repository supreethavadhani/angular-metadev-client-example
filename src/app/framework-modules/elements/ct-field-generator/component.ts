import { Component, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Field, Form } from '../../formdata/form/form';
import { FormData } from '../../formdata/form/formData';



@Component({
	selector: 'ct-field-generator',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})

export class CTFieldGen {
	@Input() public fd: FormData;

	fields:any;
	form:Form;

	control:FormControl;
	
	ngOnInit() {
		this.form = this.fd.form;
		this.fields = this.fd.form.fields; 
	}
}

