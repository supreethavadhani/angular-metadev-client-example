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
	selector: 'app-mv-checkbox',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})
export class MvCheckboxComponent implements OnInit {
	@Input() public field: Field;
	@Input() public fd: FormData;
	@Output() public valueChange = new EventEmitter < boolean > ();
	@Output() public changeListener = new EventEmitter < any > ();
	public control: FormControl;
	public isChecked: boolean = false;

	ngOnInit() {
		this.control = this.fd.formGroup.get(this.field.name) as FormControl;
		this.isChecked = this.control.value;
		this.control.valueChanges.subscribe(value => {
			this.changeListener.next(value)
		});
	}
	changed() {
		this.isChecked = this.control.value;
		this.valueChange.next(this.control.value);
	}
}