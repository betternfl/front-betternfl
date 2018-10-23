import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { AmigosPage } from '../amigos/amigos';
import { BetterNflService } from '../../services/betternfl.service';
import { SingupPage } from '../singup/singup';
import { JogosApostadosPage } from '../jogos-apostados/jogos-apostados';
import { TabsApostadosPage } from '../tabs-apostados/tabs-apostados';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  rootPage = HomePage;
  usuario: any = {};
  imagem;
  corTime;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
  ) {

    this.storage.get('user').then((result:any)=>{
      console.log('settings user', result);
      if (result.timeFavorito == null) {
        this.imagem = "assets/imgs/interrogacao.png";
      } else {
        this.imagem = result.timeFavorito.logo;
      }
    }).catch((error:any) =>{
      console.log(error);
    });
  }

  SignOut() {
    this.storage.remove('user');
    this.navCtrl.setRoot(LoginPage);
  }
  GoToApostadosPage(){
    this.navCtrl.push(TabsApostadosPage);
  }

  GoToAmigosPage() {
    this.navCtrl.push(AmigosPage);
  }

  GoToSingupPage() {
    this.navCtrl.push(SingupPage);
  }
}
