import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsServiceProvider } from '../../providers/news-service/news-service'
import { Article } from '../../interfaces/article';



@IonicPage()
@Component({
  selector: 'page-business',
  templateUrl: 'business.html',
})
export class BusinessPage {

  articles: Article[]

  constructor(public navCtrl: NavController, public navParams: NavParams, private newsService: NewsServiceProvider) {
    this.newsService.getBusinessNews().subscribe( res => {
      this.articles = res.articles;
      console.log(this.articles)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessPage');
  }

  goToLocation(url){
    location.href = url
  }

}
