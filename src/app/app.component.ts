import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { JogoPage } from '../pages/jogo/jogo';
import { LoginPage } from '../pages/login/login';
import { ConfigProvider } from '../providers/config/config';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
  ]
})
export class MyApp {
  rootPage: any;
  login: boolean = false;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    ConfigProvider: ConfigProvider
  ) {
    platform.ready().then(() => {
      let status = ConfigProvider.getConfigData();
      if (status == null) {
        this.rootPage = LoginPage;
      } else {
        const lst_status = JSON.parse(status);
        if (!lst_status.logado) {
          this.rootPage = LoginPage;
        }
        else
          this.rootPage = HomePage;
      }
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

}
