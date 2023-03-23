
import { Form , Field, ChildForm ,FormData, SelectOption, Vo, ServiceAgent } from 'mv-core';
import { Validators } from '@angular/forms'

export class OrdersForm extends Form {
	private static _instance = new OrdersForm();
	orderId:Field = {
		name:'orderId'
		,controlType: 'Hidden'
		,label: ''
		,valueType: 1
		,errorId: 'invalidId'
		,maxValue: 9999999999999
	};
	orderName:Field = {
		name:'orderName'
		,controlType: 'Input'
		,label: 'Order Name'
		,isRequired: true
		,valueType: 0
		,errorId: 'invalidName'
		,maxLength: 150
	};
	orderNumber:Field = {
		name:'orderNumber'
		,controlType: 'Input'
		,label: 'Order Number'
		,valueType: 1
		,errorId: 'invalidInteger'
		,maxValue: 9999999999999
	};

	public static getInstance(): OrdersForm {
		return OrdersForm._instance;
	}

	constructor() {
		super();
		this.serveGuests = true;
		this.fields = new Map();
		this.controls = new Map();
		this.controls.set('orderId', [Validators.max(9999999999999)]);
		this.fields.set('orderId', this.orderId);
		this.controls.set('orderName', [Validators.required, Validators.maxLength(150)]);
		this.fields.set('orderName', this.orderName);
		this.controls.set('orderNumber', [Validators.max(9999999999999)]);
		this.fields.set('orderNumber', this.orderNumber);
		this.opsAllowed = {create: true, filter: true, get: true, update: true};
		this.keyFields = ["orderId"];
	}

	public getName(): string {
		 return 'orders';
	}
}


export class OrdersFd extends FormData {
	constructor(form: OrdersForm, sa: ServiceAgent) {
		super(form, sa);
	}

	setFieldValue(name: 'orderId' | 'orderName' | 'orderNumber', value: string | number | boolean | null ): void {
		super.setFieldValue(name, value);
	}

	getFieldValue(name: 'orderId' | 'orderName' | 'orderNumber' ): string | number | boolean | null {
		return super.getFieldValue(name);
	}
}


export interface OrdersVo extends Vo {
	orderNumber?: number, 
	orderId?: number, 
	orderName?: string
}
