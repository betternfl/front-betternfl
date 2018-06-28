import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingupPage } from './singup';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SingupPage,
  ],
  imports: [
    IonicPageModule.forChild(SingupPage),
    ComponentsModule,
  ],
})
export class SingupPageModule {}
