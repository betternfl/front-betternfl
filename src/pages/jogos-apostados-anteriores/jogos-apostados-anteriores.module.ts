import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JogosApostadosAnterioresPage } from './jogos-apostados-anteriores';

@NgModule({
  declarations: [
    JogosApostadosAnterioresPage,
  ],
  imports: [
    IonicPageModule.forChild(JogosApostadosAnterioresPage),
  ],
})
export class JogosApostadosAnterioresPageModule {}
