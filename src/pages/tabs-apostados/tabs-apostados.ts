import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JogosApostadosPage } from '../jogos-apostados/jogos-apostados';
import { JogosApostadosAnterioresPage } from '../jogos-apostados-anteriores/jogos-apostados-anteriores';

@IonicPage()
@Component({
  templateUrl: 'tabs-apostados.html',
})
export class TabsApostadosPage {
  tab1Root = JogosApostadosPage;
  tab2Root = JogosApostadosAnterioresPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
}
