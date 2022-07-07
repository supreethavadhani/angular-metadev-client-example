import {
	Component,
	Input,
	Output,
	EventEmitter,
	OnInit
} from '@angular/core';
import {
	FormControl
} from '@angular/forms';
import {
	Field
} from '../../formdata/form/form';
import {
	FormData
} from '../../formdata/form/formData';

/**
 * app-mv -> metadev component prefix
 */
@Component({
	selector: 'app-mv-textarea',
	templateUrl: './component.html',
	styleUrls: []
})

/** 
 * Wrapper class for angular material.
 * Unpacks values from the model to render a textarea
 * @ouput - valueChange - value change emitter.
 */
export class MvTextareaComponent implements OnInit {
	@Input() public field: Field;
	@Input() public formData: FormData;
	@Output() public valueChange = new EventEmitter < any > ();

	control: FormControl;

	ngOnInit() {
		this.control = this.formData.formGroup.get(this.field.name) as FormControl;
	}
	valueChangeDetector($event) {
		this.valueChange.next(this.formData.getFieldValue(this.field.name));
	}
}