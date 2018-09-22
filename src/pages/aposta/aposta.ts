import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BetterNflService } from '../../services/betternfl.service';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-aposta',
  templateUrl: 'aposta.html',
})
export class ApostaPage {
  usuario: any = {
    id_Usuario: 0,
    username: null,
    betcoins: null,
    timeFavorito: null,
  };
  timeCasa: any = {
    id_timeCasa: 0,
    logo: null,
    nome: null,
  };
  timeFora: any = {
    id_timeFora: 0,
    logo: null,
    nome: null,
  };
  id_jogo = 0;
  apostouTimeCasa = true;
  betcoinsParaAposta: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private betterNflService: BetterNflService,
    public storage: Storage
    ) {
    this.storage.get('jogoAposar').then((jogo) =>{
      this.timeCasa.id_timeCasa = jogo.id_timeCasa;
      this.timeCasa.logo = jogo.timeCasa.logo;
      this.timeCasa.nome = jogo.timeCasa.nome;

      this.timeFora.id_timeFora = jogo.id_timeFora;
      this.timeFora.logo = jogo.timeFora.logo;
      this.timeFora.nome = jogo.timeFora.nome;
    })
    
    this.storage.get('user').then((user) => {
      if (user != null && user.id_Usuario != 0) {
        this.usuario.id_Usuario = user.id_Usuario;
        this.usuario.username = user.username;
        this.usuario.betcoins = user.betCoins;
        this.usuario.timeFavorito = user.timeFavorito;
      }
    });
  }
  apostar(){
    console.log(this.betcoinsParaAposta);
  }

}
