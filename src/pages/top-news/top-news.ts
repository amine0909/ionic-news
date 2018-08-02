import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsServiceProvider } from '../../providers/news-service/news-service'
import { Article } from '../../interfaces/article';


@IonicPage()
@Component({
  selector: 'page-top-news',
  templateUrl: 'top-news.html',
})
export class TopNewsPage {

  articles: Article[]
  splash = true;
  tabBarElement: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private newsService: NewsServiceProvider) {
    this.tabBarElement = document.querySelector('.tabbar');
    this.newsService.getTopNews().subscribe( res => {
      this.articles = res.articles;
      console.log(this.articles)
    })
  }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    console.log('ionViewDidLoad TopNewsPage');
    setTimeout(() => {
      this.splash = false
      this.tabBarElement.style.display = 'flex';
    }, 4000);
  }

  goToLocation(url){
      location.href = url
  }

}
