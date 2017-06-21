import { Component } from '@angular/core';
import { NewsApiService } from './../../service/service.module';
import { Headers,Http, Response }          from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
 title = 'app';
 errorMessage = '';
 debug ='';
 sources = [];
 articles = [];
 constructor(private api_service: NewsApiService) {}

  ngOnInit() {
   	this.getSources();
   
  }

  getSources(){
    this.api_service.getSources().subscribe(
                       response => this.parseResponse(response),
                       error =>  this.errorMessage = <any>error);
  }

  parseResponse(response){
    this.sources = response.sources;
    this.debug = response;
  }
  
  detailedSource(feed_type){
    this.api_service.getFeed(feed_type).subscribe(
                       response => this.parseDetailResponse(response),
                       error =>  this.errorMessage = <any>error);
  }

  parseDetailResponse(response){
    this.articles = response.articles;
    this.debug = response;
  }
}
