import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JogoPage } from './jogo';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    JogoPage,
  ],
  imports: [
    IonicPageModule.forChild(JogoPage),
    BrMaskerModule,
  ],
})
export class JogoPageModule {}
