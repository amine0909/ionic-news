import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../../interfaces/article';


@Injectable()
export class NewsServiceProvider {

  constructor(public  _http: HttpClient) {
    
  }


  getTopNews(): any {
    return this._http.get<Article>("https://newsapi.org/v2/everything?sources=buzzfeed&apiKey=5b9dcf5d7ede431e8e9cd61e6afdfad1");
  }

  getSportNews(): any {
    return this._http.get<Article>("https://newsapi.org/v2/everything?sources=bbc-sport&apiKey=5b9dcf5d7ede431e8e9cd61e6afdfad1");
  }

  getBusinessNews(): any {
    return this._http.get<Article>("https://newsapi.org/v2/everything?sources=business-insider&apiKey=5b9dcf5d7ede431e8e9cd61e6afdfad1");

  }
}
