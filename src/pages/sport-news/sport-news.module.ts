import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SportNewsPage } from './sport-news';

@NgModule({
  declarations: [
    SportNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(SportNewsPage),
  ],
})
export class SportNewsPageModule {}
