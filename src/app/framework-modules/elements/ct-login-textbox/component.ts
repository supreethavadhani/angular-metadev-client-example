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
	selector: 'app-login-textbox',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})

export class AppLoginTextboxComponent implements OnInit {
	@Input() public field: Field;
	@Input() public fd: FormData;
	@Input() public type: string;
	@Output() public valueChange = new EventEmitter < any > ();

	/** 
	 * Fields explicitly expected from form control
	 * 1.regex
	 * 2.type
	 * 3.max-length
	 * 4.min-length
	 */
	control: FormControl;

	ngOnInit() {
		this.control = this.fd.formGroup.get(this.field.name) as FormControl;
	}
	valueChangeDetector($event) {
		this.valueChange.next($event.value);
	}
}