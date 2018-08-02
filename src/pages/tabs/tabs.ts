import { Component } from '@angular/core';

import { BusinessPage } from '../business/business'
import  { TopNewsPage } from '../top-news/top-news'
import { SportNewsPage } from '../sport-news/sport-news'


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TopNewsPage;
  tab2Root = BusinessPage;
  tab3Root = SportNewsPage;

  constructor() {

  }
}
