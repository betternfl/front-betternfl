import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JogoPage } from './jogo';

@NgModule({
  declarations: [
    JogoPage,
  ],
  imports: [
    IonicPageModule.forChild(JogoPage),
  ],
})
export class JogoPageModule {}
