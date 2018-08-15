import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BetterNflService } from '../../services/betternfl.service';
import { Chart } from 'chart.js';


@IonicPage()
@Component({
  selector: 'page-jogo',
  templateUrl: 'jogo.html',
})
export class JogoPage {
  @ViewChild('barCanvas') barCanvas;
  jogo: any;
  historicos: any = [];
  carregaHistorico = false;
  carregaRanking = false;
  semHistorico = false;
  barChart: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private betterNflService: BetterNflService) {
    this.jogo = navParams.get('jogo');
    this.CarregaHistoricoPartidas();
    this.CarregaRankingTimes();
  }

  async CarregaHistoricoPartidas() {
    this.carregaHistorico = true;
    this.historicos = await this.betterNflService.Historico(this.jogo.timeCasa.id_time, this.jogo.timeFora.id_time);
    console.log(this.historicos);
    if (this.historicos.length == 0) {
      this.semHistorico = true;
    }
    this.carregaHistorico = false;
  }

  async CarregaRankingTimes() {
    this.carregaRanking = true;
    let rankingTimeCasa = await this.betterNflService.Ranking(this.jogo.temporada, this.jogo.timeCasa.id_time);
    let rankingTimeFora = await this.betterNflService.Ranking(this.jogo.temporada, this.jogo.timeFora.id_time);
    console.log(rankingTimeCasa);
    console.log(rankingTimeFora);

    let timeCasaDados = {
      label: rankingTimeCasa.time.nome,
      data: [rankingTimeCasa.rankingGeral,
      rankingTimeCasa.rankingAtaque,
      rankingTimeCasa.rankingDefesa,
      rankingTimeCasa.vitoriasCasa],
      backgroundColor: 'rgba(' + rankingTimeCasa.time.cor + ',1)',
    }

    let timeForaDados = {
      label: rankingTimeFora.time.nome,
      data: [rankingTimeFora.rankingGeral,
      rankingTimeFora.rankingAtaque,
      rankingTimeFora.rankingDefesa,
      rankingTimeFora.vitoriasCasa],
      backgroundColor: 'rgba(' + rankingTimeFora.time.cor + ',1)',
    }

    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ["Geral", "Ataque", "Defesa", "Vitórias"],
        datasets: [timeCasaDados, timeForaDados]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              suggestedMin: 1,
              suggestedMax: 32,
            },
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        }
      }
    });
    this.carregaRanking = false;
  }
}
