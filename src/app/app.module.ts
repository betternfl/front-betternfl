import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';
import { SingupPageModule } from '../pages/singup/singup.module';
import { ComponentsModule } from '../components/components.module';
import { ApiNflProvider } from '../providers/api-nfl/api-nfl';
import { BetterNflService } from '../services/betternfl.service';
import { HttpModule } from '@angular/http';
import { ConfigProvider } from '../providers/config/config';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { JogoPageModule } from '../pages/jogo/jogo.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    SingupPageModule,
    JogoPageModule,
    ComponentsModule,
    HttpModule,
    SettingsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiNflProvider,
    ConfigProvider,
    BetterNflService
  ]
})
export class AppModule {}
