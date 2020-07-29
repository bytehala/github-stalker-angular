import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GithubRepoModel} from '../shared/models/github-repo.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GithubApiService {

  constructor(private http: HttpClient) {}

  // Uses http.get() to load data from a single API endpoint
  getStarred(user: string): Observable<GithubRepoModel[]> {
    console.log('getStarred');
    return this.http.get<GithubRepoModel[]>('https://api.github.com/users/' + user + '/starred');
  }

}
