import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { AmigosPage } from '../amigos/amigos';
import { SingupPage } from '../singup/singup';
import { TabsApostadosPage } from '../tabs-apostados/tabs-apostados';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  rootPage = HomePage;
  usuario = {
    betCoins: null,
    email: null,
    id_Usuario: 0,
    password: null,
    timeFavorito: null,
    username: null,
  };
  imagem;
  betCoins =0;
  corTime;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    private zone: NgZone,
  ) {
    this.carregaUsuario();
  }

  async carregaUsuario() {
    this.usuario = await this.storage.get('user');
    this.zone.run(()=> {
      this.betCoins = this.usuario.betCoins;
    });
    if (this.usuario.timeFavorito == null) {
      this.imagem = "assets/imgs/interrogacao.png";
    } else {
      this.imagem = this.usuario.timeFavorito.logo;
    }
  }

  SignOut() {
    this.storage.remove('user');
    this.navCtrl.setRoot(LoginPage);
  }
  GoToApostadosPage() {
    this.navCtrl.push(TabsApostadosPage);
  }

  GoToAmigosPage() {
    this.navCtrl.push(AmigosPage);
  }

  GoToSingupPage() {
    this.navCtrl.push(SingupPage);
  }
}
