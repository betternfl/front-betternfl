import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { BetterNflService } from '../../services/betternfl.service';
import { Storage } from '@ionic/storage';

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignPage');
  }

  constructor(public navCtrl: NavController,
    private betterNflService: BetterNflService,
    private loadingController: LoadingController,
    public storage: Storage,
    private toastController: ToastController) {
    this.carregaUsuario();
    this.CarregaTimes();
    this.previousPage = this.navCtrl.last();
    console.log('ionViewDidLoad SignPage Construtor');
  }

  async CarregaTimes() {
    console.log("Carregando Times");
    this.times = await this.betterNflService.Times();
    console.log(this.times);
  }

  carregaUsuario() {
    this.storage.get('user').then((result: any) => {
      if (result != null) {
        this.user.id_Usuario = result.id_Usuario;
        this.user.username = result.username;
        this.user.email = result.email;
        this.user.password = result.password;
        if (result.id_timeFavorito == undefined){
          this.user.id_TimeFavorito = 0   
        }else{
          this.user.id_TimeFavorito = result.timeFavorito.id_time;
          this.temFavorito = true;
          this.timeFavorito = result.timeFavorito;
          console.log(result)
          //this.favoritaTime(result.timeFavorito)
        }
        console.log(this.user);
      }else
        console.log("Sem user logado");   
    })
    .catch((error: any) => {  
      console.log(error);
    });
  }

  mostraTimes() {
    this.exibeTimes = !this.exibeTimes;
  }

  favoritaTime(time) {
    console.log(time)
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
        this.storage.set('user', this.user);
        this.navCtrl.setRoot(this.previousPage);
        this.navCtrl.popToRoot(this.previousPage);
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
