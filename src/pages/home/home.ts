import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { getTypeNameForDebugging } from '@angular/common/src/directives/ng_for_of';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  exibeDetalhe: boolean = true;
  jogosApostados: any = [0];
  temJogo: boolean = false;
  apostados: boolean = false;
  naoApostados: boolean = false;
  constructor(public navCtrl: NavController) {
    if(this.jogosApostados.length > 0){
      this.temJogo = true;
    }
  }

  expandApostados() {
    if(this.temJogo && this.exibeDetalhe){
      this.apostados = true;
    }
  }
  expandNaoApostados() {
    if(!this.temJogo)
    this.naoApostados = !this.naoApostados;
  }
  expandJogos() {
    this.exibeDetalhe = !this.exibeDetalhe;
  }
}
