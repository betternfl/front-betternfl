import { Component } from '@angular/core';
import { NavController, Config, ToastController } from 'ionic-angular';
import { BetterNflService } from '../../services/betternfl.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  private jogos:any[];
  private showCard:boolean = true;
  private anos:any[] = [2010,2011,2012,2013,2014,2015,2016,2017,2018];
  private semanas:any[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
  private ano:number;
  private semana:number;

  constructor(public navCtrl: NavController, 
    private betterNflService : BetterNflService,
    private toastController : ToastController) {

  }
  
  async JogosDaSemana(ano:number, semana:number){
    console.log('Carregando Jogos da Semana');
    this.jogos = await this.betterNflService.Jogos(ano, 'reg', semana);
    console.log(this.jogos);
  }

  mostraCard(){
    this.showCard = true;
  }

  escondeCard(){
    this.showCard = false;
    this.JogosDaSemana(this.ano, this.semana);
  }

  logoTime(time:string){
    return 'assets/imgs/logos/' + time + '.png';
  }
  
  exibeVencedor(jogo:any){
    let toast = this.toastController.create({
      message: 'O time vencedor deste jogo é: ' + jogo.vencedor,
      duration: 1500,
      position: 'bottom'
    });

    toast.present();
  }
}
