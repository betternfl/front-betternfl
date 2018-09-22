import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { BetterNflService } from '../../services/betternfl.service';

@IonicPage()
@Component({
  selector: 'page-amigos',
  templateUrl: 'amigos.html',
})
export class AmigosPage {
  showCard: boolean = false;
  amigos:any = [];
  usuarioPesquisa:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private toastController: ToastController,
              private betterNflService: BetterNflService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmigosPages');
  }

  mostraCard(){
    this.showCard = !this.showCard;
  }
  async CarregaAmigos(){

  }

  async procuraAmigo(){
    this.betterNflService.BuscaAmigos(this.usuarioPesquisa)
      .then((result: any) => {
        console.log(result.json());
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
