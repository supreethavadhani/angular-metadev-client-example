
import { Form , Field, ChildForm ,FormData, SelectOption, Vo, ServiceAgent } from 'mv-core';
import { Validators } from '@angular/forms'

export class UserContextForm extends Form {
	private static _instance = new UserContextForm();

	public static getInstance(): UserContextForm {
		return UserContextForm._instance;
	}

	constructor() {
		super();
		this.fields = new Map();
		this.controls = new Map();
		this.keyFields = ["userId"];
	}

	public getName(): string {
		 return 'userContext';
	}
}


export class UserContextFd extends FormData {
	constructor(form: UserContextForm, sa: ServiceAgent) {
		super(form, sa);
	}
	/**  this form has no editable fields. data nust be accessed as Vo and not through fd **/
}


export interface UserContextVo extends Vo {
	trustId?: number, 
	allowedPages?: string, 
	loginId?: string, 
	phoneNumber?: string, 
	designationId?: number, 
	name?: string, 
	instituteId?: number, 
	userType?: string, 
	designation?: string, 
	userId?: number, 
	email?: string
}
