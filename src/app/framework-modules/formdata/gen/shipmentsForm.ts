
import { Form , Field, ChildForm ,FormData, SelectOption, Vo, ServiceAgent } from 'mv-core';
import { Validators } from '@angular/forms'

export class ShipmentsForm extends Form {
	private static _instance = new ShipmentsForm();
	shipmentid:Field = {
		name:'shipmentid'
		,controlType: 'Hidden'
		,label: ''
		,valueType: 1
		,errorId: 'invalidId'
		,maxValue: 9999999999999
	};
	shipmentName:Field = {
		name:'shipmentName'
		,controlType: 'Input'
		,label: 'Shipment Name'
		,isRequired: true
		,valueType: 0
		,errorId: 'invalidName'
		,maxLength: 150
	};
	shipmentNumber:Field = {
		name:'shipmentNumber'
		,controlType: 'Input'
		,label: 'Shipment Number'
		,valueType: 1
		,errorId: 'invalidInteger'
		,maxValue: 9999999999999
	};

	public static getInstance(): ShipmentsForm {
		return ShipmentsForm._instance;
	}

	constructor() {
		super();
		this.fields = new Map();
		this.controls = new Map();
		this.controls.set('shipmentid', [Validators.max(9999999999999)]);
		this.fields.set('shipmentid', this.shipmentid);
		this.controls.set('shipmentName', [Validators.required, Validators.maxLength(150)]);
		this.fields.set('shipmentName', this.shipmentName);
		this.controls.set('shipmentNumber', [Validators.max(9999999999999)]);
		this.fields.set('shipmentNumber', this.shipmentNumber);
		this.keyFields = ["shipmentid"];
	}

	public getName(): string {
		 return 'shipments';
	}
}


export class ShipmentsFd extends FormData {
	constructor(form: ShipmentsForm, sa: ServiceAgent) {
		super(form, sa);
	}

	setFieldValue(name: 'shipmentid' | 'shipmentName' | 'shipmentNumber', value: string | number | boolean | null ): void {
		super.setFieldValue(name, value);
	}

	getFieldValue(name: 'shipmentid' | 'shipmentName' | 'shipmentNumber' ): string | number | boolean | null {
		return super.getFieldValue(name);
	}
}


export interface ShipmentsVo extends Vo {
	shipmentName?: string, 
	shipmentNumber?: number, 
	shipmentid?: number
}
