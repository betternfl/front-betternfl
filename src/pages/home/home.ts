import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { getTypeNameForDebugging } from '@angular/common/src/directives/ng_for_of';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  exibeDetalhe: boolean = false;
  apostados: boolean = false;
  naoApostados: boolean = false;

  constructor(public navCtrl: NavController) {
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
}
