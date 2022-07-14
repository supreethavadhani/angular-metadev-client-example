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
	styleUrls: []
})

/** 
 * Wrapper class for angular material.
 * Unpacks values from the model to render a dropdown
 */

export class MvDropDownComponent implements OnInit {
	@Input() public field: Field;
	@Input() public formData: FormData;
	@Output() public valueChange = new EventEmitter < string > ();
	@Output() public changeListener = new EventEmitter < any > ();

	public formControl: FormControl;

	ngOnInit() {
		this.formControl = this.formData.formGroup.get(this.field.name) as FormControl;
		this.formControl.valueChanges.subscribe(value => {
			this.changeListener.next(value)
		});
	}
	currentValue(value) {
		this.valueChange.next(value);
	}
}