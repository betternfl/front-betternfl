import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BetterNflService } from '../../services/betternfl.service';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-jogos-apostados-anteriores',
  templateUrl: 'jogos-apostados-anteriores.html',
})
export class JogosApostadosAnterioresPage {
  jogosApostados: any = [];
  idUsuario: number = 0;
  carregaJogos = false;
  temJogo = true;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private betterNflService: BetterNflService,
    private storage: Storage) {
    this.carregaJogos = true;
    this.storage.get('user').then((user) => {
      this.betterNflService.BuscarApostasHistoricas(user.id_Usuario).then((result) => {
        this.jogosApostados = result;
        if (this.jogosApostados.length <= 0) {
          this.temJogo = false;
        }
        this.carregaJogos = false;
        console.log('anteriores', result);
      }).catch((error) => {
        console.log(error);
        this.carregaJogos = false;
      });
    }).catch((error) => {
      console.log(error);
      this.carregaJogos = false;
    });

  }
}
