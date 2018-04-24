import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  times: any = [];
  constructor(public navCtrl: NavController) {
    //O JSON DE TIMES VAI VIR DESSE JEITO ATÉ VOCE PEDIR QUE SEJA DIFERENTE
    this.times = [
      {
        nomeTime: "Seattle Seahawks",
        nomeEstadio: "CenturyLink Field",
        favorito: true,
        expanded: false
      }, {
        nomeTime: "San Francisco 49ers",
        nomeEstadio: "Levi's Stadium",
        favorito: false,
        expanded: false
      },
    ];
  }
  expandItem(time) {
    this.times.map((listItem) => {
      if (time == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }
      return listItem;
    });
  }

  favoritaTime(time) {
    this.times.map((listItem) => {
      if (time == listItem) {
        listItem.favorito = !listItem.favorito;
      } else {
        listItem.favorito = false;
      }
      return listItem;
    });
  }
}
