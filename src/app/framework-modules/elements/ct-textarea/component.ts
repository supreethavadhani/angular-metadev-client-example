import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Field } from '../../formdata/form/form';
import { FormData } from '../../formdata/form/formData';

@Component({
	selector: 'ct-textarea',
	templateUrl: './component.html',
	styleUrls: []
})

/*
* Wrapper class for angular material.
* Unpacks values from the model to render a textarea
* @ouput - valueChange - value change emitter.
*/
export class CTTextareaComponent {
	@Input() public field: Field;
	@Input() public fd: FormData;
	@Output() public valueChange = new EventEmitter<any>();

	control:FormControl;
	
	ngOnInit() {
		this.control = this.fd.formGroup.get(this.field.name) as FormControl;
	}
	valueChangeDetector($event){
		this.valueChange.next(this.fd.getFieldValue(this.field.name));
	}
}

