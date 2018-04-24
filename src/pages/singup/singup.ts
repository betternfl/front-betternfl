import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html',
})
export class SingupPage {
  private username: string;
  private email: string;
  private password: string;
  times: any = [];
  constructor(public navCtrl: NavController) {
    //O JSON DE TIMES VAI VIR DESSE JEITO ATÉ VOCE PEDIR QUE SEJA DIFERENTE
    this.times = [
      {
        nomeTime: "Seattle Seahawks",
        nomeEstadio: "CenturyLink Field",
        favorito: true,
        expanded: false,
        foto: "assets/imgs/logos/seattleSeahawks.png",
      }, {
        nomeTime: "San Francisco 49ers",
        nomeEstadio: "Levi's Stadium",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/sanFransisco49ers.png",
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad SingupPage');
  }

  createAccount() {
    alert(this.username + "\n" + this.email);
    this.navCtrl.popToRoot();
  }

}
