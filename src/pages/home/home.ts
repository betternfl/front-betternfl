import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  teste: boolean = false;
  exibeApostados = false;
  apostados: boolean = false;
  naoApostados: boolean = false;
  jogos: any = [];
  constructor(public navCtrl: NavController) {

  }

  expandApostados() {
    this.apostados = !this.apostados;
  }
  expandNaoApostados() {
    this.naoApostados = !this.naoApostados;
  }
  expandTeste() {
    this.teste = !this.teste;
  }

}
