import { Component, Input } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Form } from '../../formdata/form/form';
import { FormData } from '../../formdata/form/formData';

@Component({
	selector: 'ct-field-generator',
	templateUrl: './component.html',
	styleUrls: []
})

/**
 * Automated field Generator component
 * @fd - Formdata
 */
export class CTFieldGenerator {
	@Input() public fd: FormData;

	fields:any;
	form:Form;
	control:FormControl;
	
	ngOnInit() {
		this.form = this.fd.form;
		this.fields = this.fd.form.fields;
	}
}

