import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { BetterNflService } from '../../services/betternfl.service';
import { Storage } from '@ionic/storage';
import { SettingsPage } from '../settings/settings';

@IonicPage()
@Component({
  selector: 'page-aposta',
  templateUrl: 'aposta.html',
})
export class ApostaPage {
  aposta: any = {
    id_Apostas: 0,
    id_Usuario: 0,
    id_Jogo: 0,
    id_TipoAposta: 0,
    id_TimeApostado: 0,
    ValorApostado: null,
  };
  usuario: any = {
    id_Usuario: 0,
    username: null,
    betcoins: null,
    timeFavorito: null,
  };
  timeCasa: any = {
    id_time: 0,
    logo: null,
    nome: null,
  };
  timeFora: any = {
    id_time: 0,
    logo: null,
    nome: null,
  };
  apostouTimeCasa = true;
  timeApostado: any;
  tiposAposta: any = [];
  tipoAposta: any;
  betcoinsParaAposta: any;
  idJogo = 0;
  idAposta = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private betterNflService: BetterNflService,
    private toastController: ToastController,
    private loadingController: LoadingController,
    public storage: Storage
  ) {
    this.betterNflService.BuscaTiposAposta().then((result) => {
      this.tiposAposta = result;
    }).catch((error) => {
      console.log(error);
    });

    this.storage.get('jogoAposar').then((jogo) => {
      this.idJogo = jogo.id_Jogo;
      this.timeCasa.id_time = jogo.timeCasa.id_time;
      this.timeCasa.logo = jogo.timeCasa.logo;
      this.timeCasa.nome = jogo.timeCasa.nome;

      this.timeFora.id_time = jogo.timeFora.id_time;
      this.timeFora.logo = jogo.timeFora.logo;
      this.timeFora.nome = jogo.timeFora.nome;
      this.storage.get('user').then((user) => {
        if (user != null && user.id_Usuario != 0) {
          this.aposta.id_Usuario = user.id_Usuario;
          this.usuario.id_Usuario = user.id_Usuario;
          this.usuario.username = user.username;
          this.usuario.betcoins = user.betCoins;
          this.usuario.timeFavorito = user.timeFavorito;
          this.carregaAposta(this.usuario.id_Usuario, this.idJogo);
        }
      });
    });

  }

  carregaAposta(idUsuario: number, idJogo: number) {
    this.betterNflService.BuscaApostaPorJogo(idUsuario, idJogo)
      .then((result: any) => {
        console.log(result);
        this.aposta.id_Apostas = result.id_Apostas;
        this.idAposta = result.id_Apostas;
        if (result.id_TimeApostado == this.timeCasa.id_time) {
          this.apostouTimeCasa = true;
        } else {
          this.apostouTimeCasa = false;
        }
        this.tipoAposta = result.id_TipoAposta;
        this.betcoinsParaAposta = result.valorApostado;
      }).catch((error) => {
        console.log(error);
      });
  }

  validaTela() {
    if (this.tipoAposta == null || this.tipoAposta.id_Aposta == 0) {
      let toast = this.toastController.create({
        message: 'Selecione um tipo de aposta!',
        duration: 3000,
        position: 'bottom',
        showCloseButton: true,
        closeButtonText: 'X'
      });
      toast.present();
      return false;
    }
    if (this.betcoinsParaAposta == null ||
      parseFloat(this.betcoinsParaAposta) < 0 ||
      parseFloat(this.betcoinsParaAposta) > parseFloat(this.usuario.betcoins)
    ) {
      let toast = this.toastController.create({
        message: 'BetCoins inválidos!',
        duration: 3000,
        position: 'bottom',
        showCloseButton: true,
        closeButtonText: 'X'
      });
      toast.present();
      return false;
    }

    return true;
  }

  excluirAposta() {
    let loading = this.loadingController.create({
      content: 'Aguarde...'
    });
    loading.present();
    if (this.idAposta == 0 || this.idAposta == null) {
      let toast = this.toastController.create({
        message: 'Realize a aposta primeiro!',
        duration: 3000,
        position: 'bottom',
        showCloseButton: true,
        closeButtonText: 'X'
      });
      toast.present();
      loading.dismiss();
    } else {
      this.betterNflService.excluirAposta(this.idAposta)
        .then((result: any) => {
          let toast = this.toastController.create({
            message: 'Aposta excluída com sucesso!',
            duration: 3000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'X'
          });
          toast.present();
          console.log(result);
          this.usuario = result;
          this.storage.set('user', result);
          this.navCtrl.setRoot(SettingsPage);
          this.navCtrl.push(SettingsPage, {
            betCoins: this.usuario.betCoins
          });
          loading.dismiss();
        }).catch((error) => {
          console.log(error);
        });
    }
  }

  apostar() {
    let loading = this.loadingController.create({
      content: 'Aguarde...'
    });
    if (this.validaTela()) {
      this.aposta.id_Jogo = this.idJogo;
      if (this.apostouTimeCasa === true) {
        this.aposta.id_TimeApostado = this.timeCasa.id_time;
      } else {
        this.aposta.id_TimeApostado = this.timeFora.id_time;
      }
      this.aposta.id_TipoAposta = this.tipoAposta;
      this.aposta.ValorApostado = parseFloat(this.betcoinsParaAposta);
      console.log(this.aposta);

      loading.present();
      this.betterNflService.salvarAposta(this.aposta).then((result) => {
        let toast = this.toastController.create({
          message: 'Aposta realizada com sucesso!',
          duration: 3000,
          position: 'bottom',
          showCloseButton: true,
          closeButtonText: 'X'
        });
        toast.present();

        loading.dismiss();
        this.usuario = result;
        this.storage.set('user', this.usuario);
        this.navCtrl.setRoot(SettingsPage);
      }).catch((error) => {
        console.log(error);
        loading.dismiss();
      });
    }
  }
}
