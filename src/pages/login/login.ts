import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Alert } from 'ionic-angular';
import { SingupPage } from '../singup/singup';
import { TabsPage } from '../tabs/tabs';
import { NgForm } from '@angular/forms';
import { HomePage } from '../home/home';
import { ConfigProvider } from '../../providers/config/config';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    ConfigProvider
  ]
})
export class LoginPage {
  public userEmail: string;
  public password: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private ConfigProvider: ConfigProvider) {
  }

  autenticaLogin() {
    this.ConfigProvider.signIn(this.userEmail, this.password);
    let status = this.ConfigProvider.getConfigData();
    if (status != null) {
      const lst_status = JSON.parse(status);
      if (!lst_status.logado)
        alert("Usuario ou Senha Invalida");
      else
        this.navCtrl.push(TabsPage);
    }

  }


  createAccount() {
    this.navCtrl.push(SingupPage);
  }

  signInWithGoogle() {
    this.toastCtrl.create({ duration: 3000, position: 'bottom', message: 'Google' })
      .present();
  }

  signInWithFacebook() {
    this.toastCtrl.create({ duration: 3000, position: 'bottom', message: 'Facebook' })
      .present();
  }

}
