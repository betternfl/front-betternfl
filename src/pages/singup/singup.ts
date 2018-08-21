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
        this.navCtrl.push(LoginPage);
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
          this.user= {
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
