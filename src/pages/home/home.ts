import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BetterNflService } from '../../services/betternfl.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  semanas:any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
  carregouJogos: boolean = true;
  jogos:any = [];

  constructor(public navCtrl: NavController, 
    private betterNflService : BetterNflService) {
  }

  exibeDetalhe(jogo){
      return jogo.expandable = !jogo.expandable;
  }
  
  async carregaJogosSemana(semana:number){
    this.carregouJogos = false;
    this.jogos = await this.betterNflService.Jogos(2018, 'reg', semana);    
    this.carregouJogos = true;
  }
  
  logoTime(time:string){
    return 'assets/imgs/logos/' + time + '.png';
  }
}
