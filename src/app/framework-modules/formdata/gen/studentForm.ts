
import { Form , Field, ChildForm ,FormData, SelectOption, Vo, ServiceAgent } from 'mv-core';
import { Validators } from '@angular/forms'

export class StudentForm extends Form {
	private static _instance = new StudentForm();
	studentId:Field = {
		name:'studentId'
		,controlType: 'Hidden'
		,label: 'studentId'
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

	public static getInstance(): StudentForm {
		return StudentForm._instance;
	}

	constructor() {
		super();
		this.serveGuests = true;
		this.fields = new Map();
		this.controls = new Map();
		this.controls.set('studentId', [Validators.min(-1), Validators.max(9999999999999)]);
		this.fields.set('studentId', this.studentId);
		this.controls.set('name', [Validators.required, Validators.maxLength(150)]);
		this.fields.set('name', this.name);
		this.controls.set('email', [Validators.required, Validators.email, Validators.maxLength(1000)]);
		this.fields.set('email', this.email);
		this.opsAllowed = {create: true, filter: true, get: true};
		this.keyFields = ["studentId"];
	}

	public getName(): string {
		 return 'student';
	}
}


export class StudentFd extends FormData {
	constructor(form: StudentForm, sa: ServiceAgent) {
		super(form, sa);
	}

	setFieldValue(name: 'studentId' | 'name' | 'email', value: string | number | boolean | null ): void {
		super.setFieldValue(name, value);
	}

	getFieldValue(name: 'studentId' | 'name' | 'email' ): string | number | boolean | null {
		return super.getFieldValue(name);
	}
}


export interface StudentVo extends Vo {
	studentId?: number, 
	name?: string, 
	email?: string
}
