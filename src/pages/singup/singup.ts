import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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
        foto: "assets/imgs/logos/arizonaCardinals.png",
      },
      {
        nomeTime: "Atlanta Falcons",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/atlantaFalcons.png",
      },
      {
        nomeTime: "Baltimore Ravens",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/baltimoreRavens.png",
      },
      {
        nomeTime: "Buffalo Bills",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/buffaloBills.png",
      },
      {
        nomeTime: "Carolina Panthers",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/carolinaPanters.png",
      },
      {
        nomeTime: "Chicago Bears",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/chicagoBears.png",
      },
      {
        nomeTime: "Cincinnati Bengals",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/cincinatiBengals.png",
      },
      {
        nomeTime: "Cleveland Browns",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/cleverlandBrowns.png",
      },
      {
        nomeTime: "Dallas Cowboys",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/dallasCowboys.png",
      },
      {
        nomeTime: "Denver Broncos",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/denverBroncos.png",
      },
      {
        nomeTime: "Detroit Lions",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/detroitLions.png",
      },
      {
        nomeTime: "Green Bay Packers",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/greenBayPackers.png",
      },
      {
        nomeTime: "Houston Texans",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/houstonTexans.png",
      },
      {
        nomeTime: "Indianapolis Colts",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/indianapolisColts.png",
      },
      {
        nomeTime: "Jacksonville Jaguars",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/jacksonvilleJaguars.png",
      },
      {
        nomeTime: "Kansas City Chiefs",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/kansasCityChiefs.png",
      },
      {
        nomeTime: "Los Angeles Chargers",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/losAngelesChargers.png",
      },
      {
        nomeTime: "Los Angeles Rams",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/losAngelesRams.png",
      },
      {
        nomeTime: "Miami Dolphins",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/miamiDolphins.png",
      },
      {
        nomeTime: "Minnesota Vikings",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/minessotaVikings.png",
      },
      {
        nomeTime: "New England Patriots",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/newEnglandPatriots.png",
      },
      {
        nomeTime: "New Orleans Saints",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/newOrleansSaints.png",
      },
      {
        nomeTime: "New York Giants",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/newYorkGiants.png",
      },
      {
        nomeTime: "New York Jets",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/newYorkJets.png",
      },
      {
        nomeTime: "Oakland Raiders",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/oaklandRaiders.png",
      },
      {
        nomeTime: "Philadelphia Eagles",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/philadelphiaEagles.png",
      },
      {
        nomeTime: "Pittsburgh Steelers",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/pittsburgSteelers.png",
      },
      {
        nomeTime: "San Francisco 49ers",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/sanFransisco49ers.png",
      },
      {
        nomeTime: "Seattle Seahawks",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/seattleSeahawks.png",
      },
      {
        nomeTime: "Tampa Bay Buccaneers",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/tampaBayBuccaneers.png",
      },
      {
        nomeTime: "Tennessee Titans",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/tennesseeTitans.png",
      },
      {
        nomeTime: "Washington Redskins",
        favorito: false,
        expanded: false,
        foto: "assets/imgs/logos/washingtonRedskins.png",
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
