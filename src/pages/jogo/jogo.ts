import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BetterNflService } from '../../services/betternfl.service';
import { Chart } from 'chart.js';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { ApostaPage } from '../aposta/aposta';


@IonicPage()
@Component({
  selector: 'page-jogo',
  templateUrl: 'jogo.html',
})
export class JogoPage {
  @ViewChild('barCanvas') barCanvas;
  jogo: any;
  usuario: any = {
    id_Usuario: 0,
    username: null,
    betcoins: null,
    timeFavorito: null,
  };
  historicos: any = [];
  jogoFuturo = false;
  carregaHistorico = false;
  betCoinsApostados: any;
  carregaRanking = false;
  semHistorico = false;
  barChart: any;
  timeCasa: null;
  timeFora: null;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private betterNflService: BetterNflService,
    public storage: Storage) {
    this.jogo = navParams.get('jogo');

    this.storage.get('user').then((user) => {
      console.log('user jogo rankings', user);
      if (user != null && user.id_Usuario != 0) {
        this.usuario.id_Usuario = user.id_Usuario;
        this.usuario.username = user.username;
        this.usuario.betcoins = user.betCoins;
        this.usuario.timeFavorito = user.timeFavorito;
      }
    });
    this.CarregaHistoricoPartidas();
    this.CarregaRankingTimes();
  }
  
  async CarregaHistoricoPartidas() {
    this.carregaHistorico = true;
    this.historicos = await this.betterNflService.Historico(this.jogo.timeCasa.id_time, this.jogo.timeFora.id_time);
    console.log(this.historicos);
    if (this.historicos.length == 0) {
      this.semHistorico = true;
    } else {
      this.carregaHistorico = false;
      this.timeCasa = this.jogo.timeCasa.nome;
      this.timeFora = this.jogo.timeFora.nome;
    }
  }

  async CarregaRankingTimes() {
    this.carregaRanking = true;
    let rankingTimeCasa = await this.betterNflService.Ranking(this.jogo.temporada, this.jogo.timeCasa.id_time);
    let rankingTimeFora = await this.betterNflService.Ranking(this.jogo.temporada, this.jogo.timeFora.id_time);
    console.log(rankingTimeCasa);
    console.log(rankingTimeFora);

    // PARA BARRA GRANDE QUANDO O TIME TIVER RANK BAIXO E QUANDO TIVER RANK ALTO, BARRA CURTA
    rankingTimeCasa.rankingGeral = 33 - rankingTimeCasa.rankingGeral;
    rankingTimeCasa.rankingAtaque = 33 - rankingTimeCasa.rankingAtaque;
    rankingTimeCasa.rankingDefesa = 33 - rankingTimeCasa.rankingDefesa;
    rankingTimeFora.rankingGeral = 33 - rankingTimeFora.rankingGeral;
    rankingTimeFora.rankingAtaque = 33 - rankingTimeFora.rankingAtaque;
    rankingTimeFora.rankingDefesa = 33 - rankingTimeFora.rankingDefesa;

    let dataCasa = [rankingTimeCasa.rankingGeral,
    rankingTimeCasa.rankingAtaque,
    rankingTimeCasa.rankingDefesa,
    ];

    let dataFora = [rankingTimeFora.rankingGeral,
    rankingTimeFora.rankingAtaque,
    rankingTimeFora.rankingDefesa,
    ];

    let labelsGrafico = ["Geral",
      "Ataque",
      "Defesa",
    ];

    let timeCasaDados = {
      label: rankingTimeCasa.time.nome,
      data: dataCasa,
      backgroundColor: 'rgba(' + rankingTimeCasa.time.cor + ',1)',
    };

    let timeForaDados = {
      label: rankingTimeFora.time.nome,
      data: dataFora,
      backgroundColor: 'rgba(' + rankingTimeFora.time.cor + ',1)',
    };

    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: labelsGrafico,
        datasets: [
          timeCasaDados,
          timeForaDados
        ]
      },
      options: {
        responsive: true,
        tooltips: {
          enabled: false
        },
        scales: {
          xAxes: [{
            // display: false,
          }],
          yAxes: [{
            display: false,
          }]
        },
        animation: {
          onComplete: function () {
            var chartInstance = this.chart,
              ctx = chartInstance.ctx;

            ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';

            this.data.datasets.forEach(function (dataset, i) {
              var meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function (bar, index) {
                let ranking = 33 - dataset.data[index];
                var data = ranking + 'ᵗʰ';
                ctx.fillText(data, bar._model.x, bar._model.y - 1);
              });
            });
          },
        },
      }
    });
    this.carregaRanking = false;
  }

  chamaTelaAposta(){
    this.storage.set('jogoAposar',this.jogo);
    this.navCtrl.push(ApostaPage);
  }
}
