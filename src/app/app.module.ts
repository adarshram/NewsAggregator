import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule,JsonpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NewsApiService } from './service/service.module';
import { FooterComponent } from './layout/footer/footer.component';
import { NewsComponent } from './news/news.component';
import { LoaderComponent } from './loader/loader.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
  {
    path: 'news/:id',
    component: NewsComponent
  },
  {
    path: '',
    redirectTo: 'news/google-news', 
    pathMatch: 'full'
  }
])
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
