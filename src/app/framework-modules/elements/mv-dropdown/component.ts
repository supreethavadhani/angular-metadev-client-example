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
import {} from 'events';
import {
	Field
} from '../../formdata/form/form';
import {
	FormData
} from '../../formdata/form/formData';
import {
	MatOption
} from '@angular/material/core';



@Component({
	selector: 'app-mv-dropdown',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})
export class MvDropDownComponent implements OnInit{
	@Input() public field: Field;
	@Input() public fd: FormData;
	@Input() public multiselect: boolean = false;
	@Output() public valueChange = new EventEmitter < string > ();
	@Output() public textChange = new EventEmitter < string > ();
	@Output() public changeListener = new EventEmitter < any > ();
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

	currentText($event) {
		this.textChange.next(($event.source.selected as MatOption).viewValue);
	}

}