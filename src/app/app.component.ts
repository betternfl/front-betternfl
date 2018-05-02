import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ConfigProvider } from '../providers/config/config';

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
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      let status = ConfigProvider.getConfigData();
      if (status == null) {
        this.rootPage = LoginPage;
        //console.log("Status == null");
      } else {
        const lst_status = JSON.parse(status);
        if (!lst_status.logado) {
          //console.log("Status != null && lst_logado == false");
          this.rootPage = LoginPage;
        }
        else
          this.rootPage = TabsPage;
      }
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

}
