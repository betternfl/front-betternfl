import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  rootPage = AboutPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }


  SignOut() {
    let config = {
      logado: false,
      name: "",
      username: "",
      password: "",
    }
    localStorage.setItem("betterNFL", JSON.stringify(config));
    window.location.reload();
  }

}
