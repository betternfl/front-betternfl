import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { getTypeNameForDebugging } from '@angular/common/src/directives/ng_for_of';
import { ApiNflProvider } from '../../providers/api-nfl/api-nfl';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    ApiNflProvider
  ]
})
export class HomePage {
  exibeDetalhe: boolean = false;
  apostados: boolean = false;
  naoApostados: boolean = false;

  constructor(public navCtrl: NavController, private api_nfl: ApiNflProvider) {
  }

  expandApostados() {
    this.apostados = !this.apostados;
    this.exibeDetalhe = false;
    this.naoApostados = false;
  }
  expandNaoApostados() {
    this.naoApostados = !this.naoApostados;
    this.exibeDetalhe = false;
    this.apostados = false;
  }
  expandJogos() {
    this.exibeDetalhe = !this.exibeDetalhe;
  }

  ionViewDidLoad() {
    this.api_nfl.getSchedule().subscribe(
      data => {
        const response = (data as any);
        console.log(response);
      }, error => {
        console.log(error);
      }
    )
  }
}
