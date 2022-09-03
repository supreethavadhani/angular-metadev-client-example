
import { Form,Field, FormData, SelectOption, Vo, ServiceAgent  } from 'mv-core';
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

	override getName(): string {
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
	trustId: number | null, 
	allowedPages: string | null, 
	loginId: string | null, 
	phoneNumber: string | null, 
	designationId: number | null, 
	name: string | null, 
	instituteId: number | null, 
	userType: string | null, 
	designation: string | null, 
	userId: number | null, 
	email: string | null
}
