import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { BusinessPage } from '../pages/business/business'
import { TopNewsPage } from '../pages/top-news/top-news'
import { SportNewsPage } from '../pages/sport-news/sport-news'
import { NewsServiceProvider } from '../providers/news-service/news-service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    BusinessPage,
    TopNewsPage,
    SportNewsPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BusinessPage,
    TopNewsPage,
    SportNewsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsServiceProvider
  ]
})
export class AppModule {}
