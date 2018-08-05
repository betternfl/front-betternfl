import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { BetterNflService } from '../../services/betternfl.service';


@IonicPage()
@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html',
})
export class SingupPage {
  exibeTimes = false;
  temFavorito = false;
  times: any = [];
  timeFavorito: any = null;
  user: any = {
    id_Usuario: 0,
    username: null,
    email: null,
    password: null,
    id_TimeFavorito: null
  };
  loading = this.loadingController.create({
    content: 'Aguarde...'
  });
  toast = this.toastController.create({
    duration: 3000,
    position: 'top',
    showCloseButton: true,
    closeButtonText: 'X'
  });



  constructor(public navCtrl: NavController,
    private betterNflService: BetterNflService,
    private loadingController: LoadingController,
    private toastController: ToastController) {
    this.CarregaTimes();
  }

  async CarregaTimes() {
    console.log("Carregando Times");
    this.times = await this.betterNflService.Times();
    console.log(this.times);
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
    this.betterNflService.cadastraUsuario(this.user)
      .then((result: any) => {
        this.toast.setMessage('Usuário cadastrado com sucesso!');
        this.toast.present();
        this.navCtrl.push(LoginPage);
        this.loading.dismiss();
      })
      .catch((error: any) => {
        console.log(error);
        this.toast.present();
        this.loading.dismiss();
      });
  }

  async buscaUsuario() {
    this.loading.present();
    let usuarioExistente = await this.betterNflService.BuscaUsuario(this.user.username);
    if (usuarioExistente.id_Usuario != 0) {
      this.user.id_Usuario = usuarioExistente.id_Usuario;
      this.user.username = usuarioExistente.username;
      this.user.password = usuarioExistente.password;
      this.user.email = usuarioExistente.email;
      this.user.id_TimeFavorito = usuarioExistente.id_TimeFavorito;
      if (usuarioExistente.id_TimeFavorito != null && usuarioExistente.id_TimeFavorito != 0) {
        this.timeFavorito = await this.betterNflService.BuscaTime(usuarioExistente.id_TimeFavorito);
        this.temFavorito = (this.timeFavorito.id_time != 0);
      }
    }
    console.log(this.timeFavorito);
    this.loading.dismiss();
  }
}
