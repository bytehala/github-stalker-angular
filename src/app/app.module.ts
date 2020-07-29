import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StalkSomeoneComponent } from './components/stalk-someone/stalk-someone.component';
import {GithubApiService} from './services/github-api.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { SearchUserComponent } from './components/search-user/search-user.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    StalkSomeoneComponent,
    SearchUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [GithubApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
