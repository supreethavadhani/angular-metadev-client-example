
import { Form , Field, ChildForm ,FormData, SelectOption, Vo, ServiceAgent } from 'mv-core';
import { Validators } from '@angular/forms'

export class EmployeeForm extends Form {
	private static _instance = new EmployeeForm();
	employeeId:Field = {
		name:'employeeId'
		,controlType: 'Hidden'
		,label: 'employeeId'
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
	phone:Field = {
		name:'phone'
		,controlType: 'Input'
		,label: 'Phone Name '
		,valueType: 0
		,errorId: 'invalidPhone'
		,minLength: 10
		,maxLength: 12
	};

	public static getInstance(): EmployeeForm {
		return EmployeeForm._instance;
	}

	constructor() {
		super();
		this.fields = new Map();
		this.controls = new Map();
		this.controls.set('employeeId', [Validators.min(-1), Validators.max(9999999999999)]);
		this.fields.set('employeeId', this.employeeId);
		this.controls.set('name', [Validators.required, Validators.maxLength(150)]);
		this.fields.set('name', this.name);
		this.controls.set('email', [Validators.required, Validators.email, Validators.maxLength(1000)]);
		this.fields.set('email', this.email);
		this.controls.set('gender', [Validators.required, Validators.maxLength(1000)]);
		this.fields.set('gender', this.gender);
		this.controls.set('phone', [Validators.minLength(10), Validators.maxLength(12), Validators.pattern('[1-9][0-9]*')]);
		this.fields.set('phone', this.phone);
		this.opsAllowed = {create: true, filter: true, get: true};
		this.listFields = ['gender'];
		this.keyFields = ["employeeId"];
	}

	public getName(): string {
		 return 'employee';
	}
}


export class EmployeeFd extends FormData {
	constructor(form: EmployeeForm, sa: ServiceAgent) {
		super(form, sa);
	}

	setFieldValue(name: 'employeeId' | 'name' | 'email' | 'gender' | 'phone', value: string | number | boolean | null ): void {
		super.setFieldValue(name, value);
	}

	getFieldValue(name: 'employeeId' | 'name' | 'email' | 'gender' | 'phone' ): string | number | boolean | null {
		return super.getFieldValue(name);
	}
}


export interface EmployeeVo extends Vo {
	name?: string, 
	employeeId?: number, 
	gender?: string, 
	phone?: string, 
	email?: string
}
