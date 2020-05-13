import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OAuthService } from '../oauth.service';
import { OAuthProfilePage } from '../profile/oauth-profile.page';
//import { Route } from '@angular/compiler/src/core';
//import { Router } from '@angular/router';
import { HomePage } from '../../home/home.page';

@Component({
	templateUrl: 'oauth-providers.list.html',
	providers: [OAuthService]
})
export class OAuthProvidersListPage {
	//private oauthService: OAuthService;
	private nav: NavController;

	constructor(oauthService: OAuthService, public navCtrl: NavController) {
		//this.oauthService = oauthService;
		this.nav = navCtrl;

		if (oauthService.isAuthorized()) {
			this.nav.setRoot(OAuthProfilePage);
		}
	}
	
	login(){
this.navCtrl.push(HomePage);
	}

	/*public login(source: string) {
		this.oauthService.login(source)
			.then(
				() => this.nav.setRoot(OAuthProfilePage),
				error => alert(error)
			);
	}*/
}