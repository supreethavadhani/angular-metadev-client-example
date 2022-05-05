import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ServiceAgent } from '../../formdata/form/serviceAgent';
import { ClientContext } from '../../formdata/form/clientContext';
import { RouterService } from 'src/app/services/routerService';

@Component({
	selector: 'ct-toolbar',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})

export class CTToolbarComponent {
	userName: string;
	loginId: string;
	dropdownShow: boolean = false;

	constructor(private sa: ServiceAgent, private ctx: ClientContext,  public routerService: RouterService,) {
		/**
		 * setting the logged in username to display in the dropdown menu
		 */
		this.userName = this.ctx.getUser().userType;
		this.loginId = this.ctx.getUser().loginId;
	}

	/**
	 * toggles the dropdownShow class to show and hide, true shows the dropdown, false hides the dropdown
	 */
	toggleDropdown() {
		this.dropdownShow = !this.dropdownShow;
	}

	/**
	 * logout function
	 */
	doLogout() {
		this.ctx.logout();
		this.sa.serve('logout').subscribe();
	}

	/**
	 * function to reset the password
	 */

	/**
	 * Call the change season screen
	 */
	changeSeason(){
		this.routerService.openSeasonSelect();
		// this.groupPanel.showSeasonSelect();
	}
}

