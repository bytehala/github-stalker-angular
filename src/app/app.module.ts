import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StalkSomeoneComponent } from './components/stalk-someone/stalk-someone.component';
import {GithubApiService} from './services/github-api.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    StalkSomeoneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GithubApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
