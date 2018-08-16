import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { BetterNflService } from '../../services/betternfl.service';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  rootPage = HomePage;
  color1 = "#C8AA76";
  color2 = "#C9243F";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    private loadingController: LoadingController,
    private betterNflService: BetterNflService) {
  }

  logoTime(time: string) {
    return 'assets/imgs/logos/' + time + '.png';
  }

  SignOut() {
    this.storage.remove('user');
    this.navCtrl.setRoot(LoginPage);
  }
}
