
import { Form , Field, ChildForm ,FormData, SelectOption, Vo, ServiceAgent } from 'mv-core';
import { Validators } from '@angular/forms'

export class VendorsForm extends Form {
	private static _instance = new VendorsForm();
	vendorId:Field = {
		name:'vendorId'
		,controlType: 'Hidden'
		,label: ''
		,valueType: 1
		,errorId: 'invalidId'
		,maxValue: 9999999999999
	};
	vendorName:Field = {
		name:'vendorName'
		,controlType: 'Input'
		,label: 'Name'
		,isRequired: true
		,valueType: 0
		,errorId: 'invalidName'
		,maxLength: 150
	};
	vendorNumber:Field = {
		name:'vendorNumber'
		,controlType: 'Textarea'
		,label: 'Number'
		,valueType: 1
		,errorId: 'invalidInteger'
		,maxValue: 9999999999999
	};
	vendorGender:Field = {
		name:'vendorGender'
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
		,errorId: 'invalidGender'
		,maxLength: 10
	};

	public static getInstance(): VendorsForm {
		return VendorsForm._instance;
	}

	constructor() {
		super();
		this.serveGuests = true;
		this.fields = new Map();
		this.controls = new Map();
		this.controls.set('vendorId', [Validators.max(9999999999999)]);
		this.fields.set('vendorId', this.vendorId);
		this.controls.set('vendorName', [Validators.required, Validators.maxLength(150)]);
		this.fields.set('vendorName', this.vendorName);
		this.controls.set('vendorNumber', [Validators.max(9999999999999)]);
		this.fields.set('vendorNumber', this.vendorNumber);
		this.controls.set('vendorGender', [Validators.required, Validators.maxLength(10)]);
		this.fields.set('vendorGender', this.vendorGender);
		this.opsAllowed = {create: true, filter: true, get: true, update: true};
		this.listFields = ['vendorGender'];
		this.keyFields = ["vendorId"];
	}

	public getName(): string {
		 return 'vendors';
	}
}


export class VendorsFd extends FormData {
	constructor(form: VendorsForm, sa: ServiceAgent) {
		super(form, sa);
	}

	setFieldValue(name: 'vendorId' | 'vendorName' | 'vendorNumber' | 'vendorGender', value: string | number | boolean | null ): void {
		super.setFieldValue(name, value);
	}

	getFieldValue(name: 'vendorId' | 'vendorName' | 'vendorNumber' | 'vendorGender' ): string | number | boolean | null {
		return super.getFieldValue(name);
	}
}


export interface VendorsVo extends Vo {
	vendorId?: number, 
	vendorGender?: string, 
	vendorName?: string, 
	vendorNumber?: number
}
