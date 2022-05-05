import { Component, Input, Output,EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import {  } from 'events';
import { Field } from '../../formdata/form/form';
import { FormData } from '../../formdata/form/formData';
 


@Component({
	selector: 'ct-data-panel',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})
export class CtDataPanel {
	@Input() isPanelHidden:false;
	ngOnInit() {
	}
}