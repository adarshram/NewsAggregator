import { Injectable } from '@angular/core';
import { Headers,Http, Response,Jsonp }          from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Injectable()
export class NewsApiService {
  headers = new Headers();
  url = 'https://newsapi.org/v1/';
  //url = '/v1/';
  api_key = '6b9a19538d34442b852222dc5593e387';
  parameters = '';
  constructor(private jsonp: Jsonp,private http: Http) {}
  
  setHeader(v,w){
  	this.headers.append(v,w);
  }
  
  setApiKey(v){
    this.api_key = v;
  }
  
  /*
  *Gets all available News Sources
  */
  getSources(){
    let source_url = this.url+'sources?language=en';
    this.setHeader('Content-Type', 'application/json');
    
    return this.http.get(source_url).map(this.extractData)
                  .catch(this.handleError);
    
  }
  
  /*
  * We might need to add a sort later
  */

  getFeed(feed_type:string){
  	let feed_url = this.url+'articles?source='+feed_type+'&apiKey='+this.api_key;
    return this.http.get(feed_url,{headers: this.headers})
                  .map(this.extractData)
                  .catch(this.handleError);
  }
  
  
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
  
}