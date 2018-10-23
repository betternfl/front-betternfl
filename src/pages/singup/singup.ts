import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { BetterNflService } from '../../services/betternfl.service';
import { Storage } from '@ionic/storage';
import { SettingsPage } from '../settings/settings';

@IonicPage()
@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html',
})
export class SingupPage {
  previousPage: any;
  exibeTimes = false;
  temFavorito = false;
  times: any = [];
  timeFavorito: any = null;
  usuario: any = {};
  user: any = {
    id_Usuario: 0,
    username: null,
    email: null,
    password: null,
    id_TimeFavorito: null
  };

  constructor(public navCtrl: NavController,
    private betterNflService: BetterNflService,
    private loadingController: LoadingController,
    public storage: Storage,
    private toastController: ToastController) {
    this.CarregaTimes();
    this.CarregaUsuario();
    this.previousPage = this.navCtrl.last();
  }

  async CarregaTimes() {
    this.times = await this.betterNflService.Times();
  }

  CarregaUsuario() {
    this.storage.get('user').then((result: any) => {
      console.log(result);
      if (result != null) {
        this.user.id_Usuario = result.id_Usuario;
        this.user.username = result.username;
        this.user.email = result.email;
        this.user.password = result.password;
        if (result.timeFavorito != null) {
          this.timeFavorito = result.timeFavorito;
          this.temFavorito = true;
        }
      }
    })
      .catch((error: any) => {
        console.log(error);
      });
  }

  mostraTimes() {
    this.exibeTimes = !this.exibeTimes;
  }

  favoritaTime(time) {
    this.times.map((listItem) => {
      if (time == listItem) {
        listItem.favorito = !listItem.favorito;
        this.temFavorito = listItem.favorito;
        if (this.temFavorito) {
          this.timeFavorito = listItem;
        } else {
          this.timeFavorito = null;
        }
      } else {
        listItem.favorito = false;
      }
      return listItem;
    });
    this.exibeTimes = false;
  }

  cadastraUsuario() {
    if (this.timeFavorito != null) {
      this.user.id_TimeFavorito = this.timeFavorito.id_time;
    } else {
      this.user.id_TimeFavorito = null;
    }
    console.log(this.user);
    this.betterNflService.cadastraUsuario(this.user)
      .then((result: any) => {
        let loading = this.loadingController.create({
          content: 'Aguarde...'
        });
        let toast = this.toastController.create({
          message: 'Usuário cadastrado com sucesso!',
          duration: 3000,
          position: 'top',
          showCloseButton: true,
          closeButtonText: 'X'
        });
        toast.present();
        //GAMBIARRA
        this.user.timeFavorito = this.timeFavorito;
        this.storage.set('user', this.user);
        if(this.user.id_Usuario != 0){
          this.navCtrl.setRoot(SettingsPage);
        } else{
          this.navCtrl.setRoot(LoginPage);
        }
        loading.dismiss();
      })
      .catch((error: any) => {
        let loading = this.loadingController.create({
          content: 'Aguarde...'
        });
        console.log(error);
        loading.dismiss();
      });
  }

  buscaUsuario() {
    this.betterNflService.BuscaUsuario(this.user.username)
      .then((result: any) => {
        let loading = this.loadingController.create({
          content: 'Aguarde...'
        });
        loading.present();
        if (result.id_Usuario != 0) {
          let toast = this.toastController.create({
            message: 'Usuário Existente!',
            duration: 3000,
            position: 'top',
            showCloseButton: true,
            closeButtonText: 'X'
          });
          toast.present();
          this.user = {
            id_Usuario: 0,
            username: null,
            email: null,
            password: null,
            id_TimeFavorito: null
          };
        }
        loading.dismiss();
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
