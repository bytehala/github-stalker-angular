import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StalkSomeoneComponent } from './components/stalk-someone/stalk-someone.component';
import {GithubApiService} from './services/github-api.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { SearchUserComponent } from './components/search-user/search-user.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header/header.component';
import { RepositoryCardComponent } from './components/repository-card/repository-card.component';


@NgModule({
  declarations: [
    AppComponent,
    StalkSomeoneComponent,
    SearchUserComponent,
    HeaderComponent,
    RepositoryCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [GithubApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
