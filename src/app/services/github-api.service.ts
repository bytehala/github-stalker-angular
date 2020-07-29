import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GithubApiService {

  constructor(private http: HttpClient) {}

  // Uses http.get() to load data from a single API endpoint
  getStarred() {
    console.log('getStarred');
    return this.http.get('https://api.github.com/users/bytehala/starred');
  }

}
