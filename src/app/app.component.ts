import { Component } from '@angular/core';
import { NewsApiService } from './service/service.module';
import { Headers,Http, Response }          from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'app';
 errorMessage = '';
 constructor(private api_service: NewsApiService) {}
}
