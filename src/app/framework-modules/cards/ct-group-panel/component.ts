import { Component, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Field } from '../../formdata/form/form';
import { FormData } from '../../formdata/form/formData';



@Component({
	selector: 'ct-group-panel',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})

export class CtGroupPanelComponent {
    @Input() cardHeader: string;
    
	ngOnInit() {
		
	}
	valueChangeDetector($event){

	}
}

