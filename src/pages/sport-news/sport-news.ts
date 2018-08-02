import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsServiceProvider } from '../../providers/news-service/news-service'
import { Article } from '../../interfaces/article';


@IonicPage()
@Component({
  selector: 'page-sport-news',
  templateUrl: 'sport-news.html',
})
export class SportNewsPage {  
  articles: Article[]


  constructor(public navCtrl: NavController, public navParams: NavParams, private newsService: NewsServiceProvider) {
    this.newsService.getSportNews().subscribe( res => {
      this.articles = res.articles;
      console.log(this.articles)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SportNewsPage');
  }

  goToLocation(url){
    location.href = url
} 

}
