import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsApiService } from './../service/service.module';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'news-component',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent {
  params;articles;errorMessage;debug;page_title;

  constructor(
    private route: ActivatedRoute,
    private api_service: NewsApiService
  ) { }

  ngOnInit() {
      this.route.params.subscribe(params => this.fetchDetailedSource(params));
  }

  fetchDetailedSource(params){
      this.articles = false;
      this.api_service.getFeed(params.id).subscribe(
                        response => this.parseDetailedResponse(response),
                        error =>  this.errorMessage = <any>error);
  }

  parseDetailedResponse(response){
      this.articles = response.articles;
      this.debug = response;
      this.page_title = response.source;
  }
}
