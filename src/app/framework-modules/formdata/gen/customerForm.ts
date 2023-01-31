
import { Form , Field, ChildForm ,FormData, SelectOption, Vo, ServiceAgent } from 'mv-core';
import { Validators } from '@angular/forms'

export class CustomerForm extends Form {
	private static _instance = new CustomerForm();
	customerId:Field = {
		name:'customerId'
		,controlType: 'Hidden'
		,label: 'customerId'
		,valueType: 1
		,errorId: 'invalidFlexibleId'
		,minValue: -1
		,maxValue: 9999999999999
	};
	name:Field = {
		name:'name'
		,controlType: 'Input'
		,label: 'Customer Name'
		,isRequired: true
		,valueType: 0
		,errorId: 'invalidName'
		,maxLength: 150
	};
	email:Field = {
		name:'email'
		,controlType: 'Input'
		,label: 'email'
		,isRequired: true
		,valueType: 0
		,errorId: 'invalidEmail'
		,maxLength: 1000
	};
	addressLine1:Field = {
		name:'addressLine1'
		,controlType: 'Input'
		,label: 'Address Line 1'
		,valueType: 0
		,errorId: 'invalidText'
		,maxLength: 1000
	};
	gender:Field = {
		name:'gender'
		,controlType: 'Dropdown'
		,label: 'Gender'
		,isRequired: true
		,listName: 'gender'
		,valueList: [
			{value:'Male',text:'Male'},
			{value:'Female',text:'Female'},
			{value:'Others',text:'Others'},
			{value:'Not Applicable',text:'Not Applicable'}
			]
		,valueType: 0
		,errorId: 'invalidText'
		,maxLength: 1000
	};
	prefferedName:Field = {
		name:'prefferedName'
		,controlType: 'Input'
		,label: 'Prefered Name '
		,valueType: 0
		,errorId: 'invalidName'
		,maxLength: 150
	};

	public static getInstance(): CustomerForm {
		return CustomerForm._instance;
	}

	constructor() {
		super();
		this.serveGuests = true;
		this.fields = new Map();
		this.controls = new Map();
		this.controls.set('customerId', [Validators.min(-1), Validators.max(9999999999999)]);
		this.fields.set('customerId', this.customerId);
		this.controls.set('name', [Validators.required, Validators.maxLength(150)]);
		this.fields.set('name', this.name);
		this.controls.set('email', [Validators.required, Validators.email, Validators.maxLength(1000)]);
		this.fields.set('email', this.email);
		this.controls.set('addressLine1', [Validators.maxLength(1000)]);
		this.fields.set('addressLine1', this.addressLine1);
		this.controls.set('gender', [Validators.required, Validators.maxLength(1000)]);
		this.fields.set('gender', this.gender);
		this.controls.set('prefferedName', [Validators.maxLength(150)]);
		this.fields.set('prefferedName', this.prefferedName);
		this.opsAllowed = {create: true, filter: true, get: true};
		this.listFields = ['gender'];
		this.keyFields = ["customerId"];
	}

	public getName(): string {
		 return 'customer';
	}
}


export class CustomerFd extends FormData {
	constructor(form: CustomerForm, sa: ServiceAgent) {
		super(form, sa);
	}

	setFieldValue(name: 'customerId' | 'name' | 'email' | 'addressLine1' | 'gender' | 'prefferedName', value: string | number | boolean | null ): void {
		super.setFieldValue(name, value);
	}

	getFieldValue(name: 'customerId' | 'name' | 'email' | 'addressLine1' | 'gender' | 'prefferedName' ): string | number | boolean | null {
		return super.getFieldValue(name);
	}
}


export interface CustomerVo extends Vo {
	gender?: string, 
	prefferedName?: string, 
	customerId?: number, 
	name?: string, 
	addressLine1?: string, 
	email?: string
}
