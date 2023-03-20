
import { Form , Field, ChildForm ,FormData, SelectOption, Vo, ServiceAgent } from 'mv-core';
import { Validators } from '@angular/forms'

export class ReturnsForm extends Form {
	private static _instance = new ReturnsForm();
	returnId:Field = {
		name:'returnId'
		,controlType: 'Hidden'
		,label: 'returnId'
		,valueType: 1
		,errorId: 'invalidFlexibleId'
		,minValue: -1
		,maxValue: 9999999999999
	};
	returnNumber:Field = {
		name:'returnNumber'
		,controlType: 'Input'
		,label: 'Return Number'
		,isRequired: true
		,valueType: 1
		,errorId: 'invalidInteger'
		,maxValue: 9999999999999
	};
	returnName:Field = {
		name:'returnName'
		,controlType: 'Input'
		,label: 'Name of the order'
		,valueType: 0
		,errorId: 'invalidName'
		,maxLength: 150
	};

	public static getInstance(): ReturnsForm {
		return ReturnsForm._instance;
	}

	constructor() {
		super();
		this.serveGuests = true;
		this.fields = new Map();
		this.controls = new Map();
		this.controls.set('returnId', [Validators.min(-1), Validators.max(9999999999999)]);
		this.fields.set('returnId', this.returnId);
		this.controls.set('returnNumber', [Validators.required, Validators.max(9999999999999)]);
		this.fields.set('returnNumber', this.returnNumber);
		this.controls.set('returnName', [Validators.maxLength(150)]);
		this.fields.set('returnName', this.returnName);
		this.opsAllowed = {create: true, filter: true, get: true};
		this.keyFields = ["returnId"];
	}

	public getName(): string {
		 return 'returns';
	}
}


export class ReturnsFd extends FormData {
	constructor(form: ReturnsForm, sa: ServiceAgent) {
		super(form, sa);
	}

	setFieldValue(name: 'returnId' | 'returnNumber' | 'returnName', value: string | number | boolean | null ): void {
		super.setFieldValue(name, value);
	}

	getFieldValue(name: 'returnId' | 'returnNumber' | 'returnName' ): string | number | boolean | null {
		return super.getFieldValue(name);
	}
}


export interface ReturnsVo extends Vo {
	returnId?: number, 
	returnName?: string, 
	returnNumber?: number
}
