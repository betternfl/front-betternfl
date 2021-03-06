import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, DateTime } from 'ionic-angular';
import { BetterNflService } from '../../services/betternfl.service';
import { JogoPage } from '../jogo/jogo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  semanas: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  anos:any[] = [2018,2017,2016,2015];
  carregouJogos: boolean = true;
  jogosPorSemana: any = [];
  login: any;
  showCard: boolean = false;
  ano: number;

  constructor(public navCtrl: NavController,
    private loadingController: LoadingController,
    private betterNflService: BetterNflService) {
      this.ano = 2018;
      this.carregaJogos(0,0);
  }
  logAno(){
    console.log(this.ano);
  }
  detalhesJogo(jogo) {
    this.navCtrl.push(JogoPage, {
      jogo: jogo
    });
  }
  limpaTela(){
    this.jogosPorSemana = [];
    this.showCard = false;
  }
  mostraCard(){
    this.showCard = !this.showCard;
  }

  async carregaJogos(ano:number, semana: number) {
    console.log(ano, semana);
    let loading = this.loadingController.create({
      content: 'Aguarde...'
    });
    loading.present();
    this.jogosPorSemana = await this.betterNflService.Jogos(ano, semana);
    console.log(this.jogosPorSemana);
    if(this.showCard){
      this.showCard = false;
    }
    loading.dismiss();
  }
}
