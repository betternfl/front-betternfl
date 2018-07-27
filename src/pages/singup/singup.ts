import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { BetterNflService } from '../../services/betternfl.service';


@IonicPage()
@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html',
})
export class SingupPage {
  private fotoFavorito: string = "";
  private username: string;
  private email: string;
  private password: string;
  private timeFavorito: string = "";
  private div: string = "";
  times: any = [];
  fav = false;
  constructor(public navCtrl: NavController,
    private betterNflService : BetterNflService,) {
    this.CarregaTimes();
  }

  async CarregaTimes(){
    console.log("Carregando Times");
    this.times = await this.betterNflService.Times();
    console.log(this.times);
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

  expandFav() {
    this.fav = !this.fav;
  }

  favoritaTime(time) {
    if (time.nomeTime == this.timeFavorito) {
      this.timeFavorito = "";
      this.fotoFavorito = "";
    } else {
      this.times.map((listItem) => {
        if (time == listItem) {
          listItem.favorito = !listItem.favorito;
          this.timeFavorito = listItem.nomeTime;
          this.fotoFavorito = listItem.caminhoLogo;
        } else {
          listItem.favorito = false;
        }
        return listItem;
      });
    }
  }

  createAccount() {
    alert(this.username + "\n" + this.email + "\n" + this.timeFavorito);
    this.navCtrl.popToRoot();
  }

}
