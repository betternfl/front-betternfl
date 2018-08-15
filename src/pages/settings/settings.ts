import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { SingupPage } from '../singup/singup';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  rootPage = HomePage;
  
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
