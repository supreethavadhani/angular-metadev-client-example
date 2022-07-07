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
	selector: 'app-mv-textbox',
	templateUrl: './component.html',
	styleUrls: []
})

/** 
 * Wrapper class for angular material.
 * Unpacks values from the model to render a textbox
 * @ouput - valueChange - value change emitter.
 */
export class MvTextboxComponent implements OnInit {
	@Input() public field: Field;
	@Input() public formData: FormData;
	@Input() public type: string;
	@Output() public valueChange = new EventEmitter < any > ();


	control: FormControl;

	/**
	 * On component initalization get
	 * form contorl from the formData
	 */
	ngOnInit() {
		this.control = this.formData.formGroup.get(this.field.name) as FormControl;
	}
	
	valueChangeDetector(_$event) {
		this.valueChange.next(this.formData.getFieldValue(this.field.name));
	}
}