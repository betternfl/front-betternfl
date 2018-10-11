import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JogosApostadosPage } from './jogos-apostados';

@NgModule({
  declarations: [
    JogosApostadosPage,
  ],
  imports: [
    IonicPageModule.forChild(JogosApostadosPage),
  ],
})
export class JogosApostadosPageModule {}
