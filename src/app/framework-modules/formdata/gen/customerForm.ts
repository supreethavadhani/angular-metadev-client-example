
import { Form , Field, ChildForm } from '../form/form';
import { FormData } from '../form/formData';
import { SelectOption, Vo } from '../form/types';
import { Validators } from '@angular/forms'
import { ServiceAgent} from '../form/serviceAgent';

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
		,label: 'Email for Customer'
		,isRequired: true
		,valueType: 0
		,errorId: 'invalidEmail'
		,maxLength: 1000
	};
	addressLine1:Field = {
		name:'addressLine1'
		,controlType: 'Textarea'
		,label: 'Address Line 1'
		,valueType: 0
		,errorId: 'invalidText'
		,maxLength: 1000
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
		this.opsAllowed = {create: true, update: true};
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

	setFieldValue(name: 'customerId' | 'name' | 'email' | 'addressLine1', value: string | number | boolean | null ): void {
		super.setFieldValue(name, value);
	}

	getFieldValue(name: 'customerId' | 'name' | 'email' | 'addressLine1' ): string | number | boolean | null {
		return super.getFieldValue(name);
	}
}


export interface CustomerVo extends Vo {
	customerId?: number, 
	name?: string, 
	addressLine1?: string, 
	email?: string
}
