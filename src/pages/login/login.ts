import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Alert, LoadingController } from 'ionic-angular';
import { SingupPage } from '../singup/singup';
import { NgForm } from '@angular/forms';
import { HomePage } from '../home/home';
import { ConfigProvider } from '../../providers/config/config';
import { BetterNflService } from '../../services/betternfl.service';
import { SettingsPage } from '../settings/settings';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    ConfigProvider
  ]
})
export class LoginPage {
  user: any = {
    username: null,
    password: null
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private loadingController: LoadingController,
    private ConfigProvider: ConfigProvider,
    private betterNflService: BetterNflService,
    private storage: Storage
  ) {
  }

  ionViewDidLoad(){
    this.storage.get('user').then((user) => {
      // Abrir tela Meus cursos
      if(user != null && user.id_Usuario != 0){
        this.navCtrl.push(SettingsPage);
      }
    });
  }

  login() {
    this.navCtrl.push(SettingsPage);
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
    // if (this.user.username === null || this.user.password === null) {
    //   toast.setMessage('Informe o usuário e senha');
    //   toast.present();
    //   loading.dismiss();
    //   return;
    // }
    // this.betterNflService.login(this.user.username, this.user.password)
    //   .then((result: any) => {
    //     this.storage.set('user', result);

    //     this.navCtrl.push(SettingsPage);
    //     loading.dismiss();
    //   })
    //   .catch((error: any) => {
    //     toast.setMessage('Usuário ou senha incorretos!')
    //     toast.present();
    //     loading.dismiss();
    //   });
  }

  chamaCadastroUsuario() {
    this.navCtrl.push(SingupPage);
  }
}
