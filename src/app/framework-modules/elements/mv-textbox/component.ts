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

@Component({
	selector: 'app-mv-textbox',
	templateUrl: './component.html',
	styleUrls: []
})

export class MvTextboxComponent implements OnInit {
	@Input() public field: Field;
	@Input() public formData: FormData;
	@Input() public type: string;
	@Output() public valueChange = new EventEmitter < any > ();


	control: FormControl;

	ngOnInit() {
		this.control = this.formData.formGroup.get(this.field.name) as FormControl;
	}
	valueChangeDetector($event) {
		this.valueChange.next(this.formData.getFieldValue(this.field.name));
	}
}