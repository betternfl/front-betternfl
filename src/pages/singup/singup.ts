import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html',
})
export class SingupPage {
  private fotoFav: string = "";
  private username: string;
  private email: string;
  private password: string;
  private timeFav: string = "";
  private div: string = "";
  times: any = [];
  fav = false;
  constructor(public navCtrl: NavController) {
    //O JSON DE TIMES VAI VIR DESSE JEITO ATÉ VOCE PEDIR QUE SEJA DIFERENTE
    this.times = [
      {
        nomeTime: "Arizona Cardinals",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/cardinals.png",
      },
      {
        nomeTime: "Atlanta Falcons",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/falcons.png",
      },
      {
        nomeTime: "Baltimore Ravens",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/ravens.png",
      },
      {
        nomeTime: "Buffalo Bills",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/bills.png",
      },
      {
        nomeTime: "Carolina Panthers",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/panters.png",
      },
      {
        nomeTime: "Chicago Bears",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/bears.png",
      },
      {
        nomeTime: "Cincinnati Bengals",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/bengals.png",
      },
      {
        nomeTime: "Cleveland Browns",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/browns.png",
      },
      {
        nomeTime: "Dallas Cowboys",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/cowboys.png",
      },
      {
        nomeTime: "Denver Broncos",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/broncos.png",
      },
      {
        nomeTime: "Detroit Lions",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/lions.png",
      },
      {
        nomeTime: "Green Bay Packers",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/packers.png",
      },
      {
        nomeTime: "Houston Texans",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/texans.png",
      },
      {
        nomeTime: "Indianapolis Colts",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/colts.png",
      },
      {
        nomeTime: "Jacksonville Jaguars",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/jaguars.png",
      },
      {
        nomeTime: "Kansas City Chiefs",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/chiefs.png",
      },
      {
        nomeTime: "Los Angeles Chargers",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/chargers.png",
      },
      {
        nomeTime: "Los Angeles Rams",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/rams.png",
      },
      {
        nomeTime: "Miami Dolphins",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/dolphins.png",
      },
      {
        nomeTime: "Minnesota Vikings",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/vikings.png",
      },
      {
        nomeTime: "New England Patriots",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/patriots.png",
      },
      {
        nomeTime: "New Orleans Saints",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/saints.png",
      },
      {
        nomeTime: "New York Giants",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/giants.png",
      },
      {
        nomeTime: "New York Jets",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/jets.png",
      },
      {
        nomeTime: "Oakland Raiders",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/raiders.png",
      },
      {
        nomeTime: "Philadelphia Eagles",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/eagles.png",
      },
      {
        nomeTime: "Pittsburgh Steelers",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/steelers.png",
      },
      {
        nomeTime: "San Francisco 49ers",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/49ers.png",
      },
      {
        nomeTime: "Seattle Seahawks",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/seahawks.png",
      },
      {
        nomeTime: "Tampa Bay Buccaneers",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/buccaneers.png",
      },
      {
        nomeTime: "Tennessee Titans",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/titans.png",
      },
      {
        nomeTime: "Washington Redskins",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/redskins.png",
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

  expandFav() {
    this.fav = !this.fav;
  }

  favoritaTime(time) {
    if (time.nomeTime == this.timeFav) {
      this.timeFav = "";
      this.fotoFav = "";
    } else {
      this.times.map((listItem) => {
        if (time == listItem) {
          listItem.favorito = !listItem.favorito;
          this.timeFav = listItem.nomeTime;
          this.fotoFav = listItem.foto;
        } else {
          listItem.favorito = false;
        }
        return listItem;
      });
    }
  }

  createAccount() {
    alert(this.username + "\n" + this.email + "\n" + this.timeFav);
    this.navCtrl.popToRoot();
  }

}
