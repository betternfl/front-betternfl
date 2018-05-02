import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { NavParams, NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SettingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  closeTabs(){
    
  }
}
