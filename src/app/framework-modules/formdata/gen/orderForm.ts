
import { Form , Field, ChildForm ,FormData, SelectOption, Vo, ServiceAgent } from 'mv-core';
import { Validators } from '@angular/forms'

export class OrderForm extends Form {
	private static _instance = new OrderForm();
	orderId:Field = {
		name:'orderId'
		,controlType: 'Hidden'
		,label: 'orderId'
		,valueType: 1
		,errorId: 'invalidFlexibleId'
		,minValue: -1
		,maxValue: 9999999999999
	};
	number:Field = {
		name:'number'
		,controlType: 'Input'
		,label: 'order Number'
		,isRequired: true
		,valueType: 1
		,errorId: 'invalidInteger'
		,maxValue: 9999999999999
	};
	orderName:Field = {
		name:'orderName'
		,controlType: 'Input'
		,label: 'Name of the order'
		,valueType: 0
		,errorId: 'invalidName'
		,maxLength: 150
	};

	public static getInstance(): OrderForm {
		return OrderForm._instance;
	}

	constructor() {
		super();
		this.serveGuests = true;
		this.fields = new Map();
		this.controls = new Map();
		this.controls.set('orderId', [Validators.min(-1), Validators.max(9999999999999)]);
		this.fields.set('orderId', this.orderId);
		this.controls.set('number', [Validators.required, Validators.max(9999999999999)]);
		this.fields.set('number', this.number);
		this.controls.set('orderName', [Validators.maxLength(150)]);
		this.fields.set('orderName', this.orderName);
		this.opsAllowed = {create: true, filter: true, get: true};
		this.keyFields = ["orderId"];
	}

	public getName(): string {
		 return 'order';
	}
}


export class OrderFd extends FormData {
	constructor(form: OrderForm, sa: ServiceAgent) {
		super(form, sa);
	}

	setFieldValue(name: 'orderId' | 'number' | 'orderName', value: string | number | boolean | null ): void {
		super.setFieldValue(name, value);
	}

	getFieldValue(name: 'orderId' | 'number' | 'orderName' ): string | number | boolean | null {
		return super.getFieldValue(name);
	}
}


export interface OrderVo extends Vo {
	number?: number, 
	orderId?: number, 
	orderName?: string
}
