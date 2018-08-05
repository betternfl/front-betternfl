import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Alert, LoadingController } from 'ionic-angular';
import { SingupPage } from '../singup/singup';
import { NgForm } from '@angular/forms';
import { HomePage } from '../home/home';
import { ConfigProvider } from '../../providers/config/config';
import { BetterNflService } from '../../services/betternfl.service';
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
  user:any = {
    username: null,
    password: null
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private loadingController: LoadingController,
    private ConfigProvider: ConfigProvider,
    private betterNflService: BetterNflService) {
  }

  login() {
    this.navCtrl.push(HomePage);
    // let loading = this.loadingController.create({
    //   content: 'Aguarde...'
    // });
    // let toast = this.toastCtrl.create({
    //   duration: 3000,
    //   position: 'bottom',
    //   showCloseButton: true,
    //   closeButtonText: 'X'
    // });

    // loading.present();
    // if(this.user.username === null || this.user.password === null){
    //   toast.setMessage('Informe o usuário e senha');
    //   toast.present();
    //   loading.dismiss();
    //   return;
    // }
    // this.betterNflService.login(this.user.username, this.user.password)
    // .then((result: any) => {
    //   this.navCtrl.push(TabsPage);
    //   loading.dismiss();
    // })
    // .catch((error: any) => {
    //   toast.setMessage('Usuário ou senha incorretos!')
    //   toast.present();
    //   loading.dismiss();
    // });
  }

  chamaCadastroUsuario() {
    this.navCtrl.push(SingupPage);
  }
}
