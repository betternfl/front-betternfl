import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SingupPage } from '../singup/singup';
import { SinginwithemailPage } from '../singinwithemail/singinwithemail';
import { TabsPage } from '../tabs/tabs';
import { NgForm } from '@angular/forms';
import { HomePage } from '../home/home';

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
})
export class LoginPage {
  public userEmail: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  autenticaLogin() {
    if (this.userEmail == "abc" && this.password == "123") {
      this.navCtrl.push(TabsPage);
    } else {
      alert("User/Senha Inválida");
    }
  }

  createAccount() {
    this.navCtrl.push(SingupPage);
  }

  signInWithEmailPage() {
    this.navCtrl.push(SinginwithemailPage);
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
