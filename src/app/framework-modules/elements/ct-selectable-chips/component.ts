import { Component, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Field } from '../../formdata/form/form';
import { FormData } from '../../formdata/form/formData';
import { MatChipInputEvent } from '@angular/material/chips';


@Component({
	selector: 'ct-selectable-chips',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})

export class CTSelectableChipsComponent {
	@Input() public chipList:any[]=[];

	/** 
	 * Fields explicitly expected from form control
	 * 1.regex
	 * 2.type
	 * 3.max-length
	 * 4.min-length
	*/
	control:FormControl;
	toggle(k){
		this.chipList[k].value = !this.chipList[k].value;
	}
	toggle1(k){
		return(this.chipList[k].value);
	}
}

