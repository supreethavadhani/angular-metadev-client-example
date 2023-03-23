
import { Form , Field, ChildForm ,FormData, SelectOption, Vo, ServiceAgent } from 'mv-core';
import { Validators } from '@angular/forms'

export class CustomerListForm extends Form {
	private static _instance = new CustomerListForm();
	customerId:Field = {
		name:'customerId'
		,controlType: 'Hidden'
		,label: ''
		,valueType: 1
		,errorId: 'invalidId'
		,maxValue: 9999999999999
	};
	customerName:Field = {
		name:'customerName'
		,controlType: 'Input'
		,label: 'Customer Name'
		,isRequired: true
		,valueType: 0
		,errorId: 'invalidName'
		,maxLength: 150
	};
	customerEmail:Field = {
		name:'customerEmail'
		,controlType: 'Input'
		,label: 'Customer Email'
		,isRequired: true
		,valueType: 0
		,errorId: 'invalidEmail'
		,maxLength: 1000
	};
	addressLine:Field = {
		name:'addressLine'
		,controlType: 'Input'
		,label: 'Address Line 1'
		,isRequired: true
		,valueType: 0
		,errorId: 'invalidText'
		,maxLength: 1000
	};
	uniName:Field = {
		name:'uniName'
		,controlType: 'Input'
		,label: 'University Name'
		,isRequired: true
		,valueType: 0
		,errorId: 'invalidName'
		,maxLength: 150
	};

	public static getInstance(): CustomerListForm {
		return CustomerListForm._instance;
	}

	constructor() {
		super();
		this.serveGuests = true;
		this.fields = new Map();
		this.controls = new Map();
		this.controls.set('customerId', [Validators.max(9999999999999)]);
		this.fields.set('customerId', this.customerId);
		this.controls.set('customerName', [Validators.required, Validators.maxLength(150)]);
		this.fields.set('customerName', this.customerName);
		this.controls.set('customerEmail', [Validators.required, Validators.email, Validators.maxLength(1000)]);
		this.fields.set('customerEmail', this.customerEmail);
		this.controls.set('addressLine', [Validators.required, Validators.maxLength(1000)]);
		this.fields.set('addressLine', this.addressLine);
		this.controls.set('uniName', [Validators.required, Validators.maxLength(150)]);
		this.fields.set('uniName', this.uniName);
		this.opsAllowed = {create: true, filter: true};
		this.keyFields = ["customerId"];
	}

	public getName(): string {
		 return 'customerList';
	}
}


export class CustomerListFd extends FormData {
	constructor(form: CustomerListForm, sa: ServiceAgent) {
		super(form, sa);
	}

	setFieldValue(name: 'customerId' | 'customerName' | 'customerEmail' | 'addressLine' | 'uniName', value: string | number | boolean | null ): void {
		super.setFieldValue(name, value);
	}

	getFieldValue(name: 'customerId' | 'customerName' | 'customerEmail' | 'addressLine' | 'uniName' ): string | number | boolean | null {
		return super.getFieldValue(name);
	}
}


export interface CustomerListVo extends Vo {
	customerId?: number, 
	uniName?: string, 
	addressLine?: string, 
	customerName?: string, 
	customerEmail?: string
}
