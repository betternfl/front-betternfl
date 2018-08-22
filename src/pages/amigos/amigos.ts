import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the AmigosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-amigos',
  templateUrl: 'amigos.html',
})
export class AmigosPage {

  showCard: boolean = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private toastController: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmigosPages');
  }

  mostraCard(){
    this.showCard = !this.showCard;
  }

  procuraAmigo(){
    //codigo para procurar amigo

    let toast = this.toastController.create({
      message: 'Usuário não encontrado',
      duration: 3000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'X'
    });
    toast.present();
    this.showCard = !this.showCard;
  }
}
