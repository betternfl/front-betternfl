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
import { BetterNflService } from '../services/betternfl.service';
import { HttpModule } from '@angular/http';
import { ConfigProvider } from '../providers/config/config';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { JogoPageModule } from '../pages/jogo/jogo.module';
import { IonicStorageModule } from '@ionic/storage';
import { AmigosPageModule } from '../pages/amigos/amigos.module';
import { ApostaPageModule } from '../pages/aposta/aposta.module';
import { JogosApostadosPageModule } from '../pages/jogos-apostados/jogos-apostados.module';
import { TabsApostadosPage } from '../pages/tabs-apostados/tabs-apostados';
import { JogosApostadosAnterioresPageModule } from '../pages/jogos-apostados-anteriores/jogos-apostados-anteriores.module';
import { TabsApostadosModule } from '../pages/tabs-apostados/tabs-apostados.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsApostadosPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    LoginPageModule,
    SingupPageModule,
    JogoPageModule,
    ComponentsModule,
    HttpModule,
    SettingsPageModule,
    AmigosPageModule,
    ApostaPageModule,
    TabsApostadosModule,
    JogosApostadosPageModule,
    JogosApostadosAnterioresPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsApostadosPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConfigProvider,
    BetterNflService
  ]
})
export class AppModule { }
