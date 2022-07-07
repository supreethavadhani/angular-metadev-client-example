import {
	Component,
	Input,
	OnInit
} from '@angular/core';
import {
	FormControl
} from '@angular/forms';
import {
	Form
} from '../../formdata/form/form';
import {
	FormData
} from '../../formdata/form/formData';

@Component({
	selector: 'app-mv-field-generator',
	templateUrl: './component.html',
	styleUrls: []
})

/**
 * The componenet unpacks the formdata (input)
 * and renders the all the fields of the form.
 * The component uses Metadev (Mv) components to
 * render the fields
 * @formData - FormData 
 */

export class MvFieldGeneratorComponent implements OnInit {
	@Input() public formData: FormData;

	fields: any;
	form: Form;
	control: FormControl;

	ngOnInit() {
		this.form = this.formData.form;
		this.fields = this.formData.form.fields;
	}
}