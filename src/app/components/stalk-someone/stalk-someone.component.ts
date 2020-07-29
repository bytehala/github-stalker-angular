import {Component, OnInit} from '@angular/core';
import {GithubApiService} from '../../services/github-api.service';
import {ActivatedRoute} from '@angular/router';
import {GithubRepoModel} from '../../shared/models/github-repo.model';

@Component({
  selector: 'app-stalk-someone',
  templateUrl: './stalk-someone.component.html',
  styleUrls: ['./stalk-someone.component.css']
})
export class StalkSomeoneComponent implements OnInit {

  private message;
  private data: GithubRepoModel[] = '';

  constructor(
    private route: ActivatedRoute,
    private githubApiService: GithubApiService) {
  }

  ngOnInit() {
    this.route.queryParams
      // .filter(params => params.order)
      .subscribe(params => {
          console.log(params); // { order: "popular" }
          this.message = 'Stalking ' + params.user;
          this.githubApiService.getStarred(params.user).subscribe(
            data => {
              console.log(data[0]);
              this.data = data;
            },
            err => {
              console.error(err);
              this.message = 'User not found: ' + params.user;
            },
            () => console.log('done')
          );

        }
      );
  }


}
