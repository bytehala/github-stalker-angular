import {Component, OnInit} from '@angular/core';
import {GithubApiService} from '../../services/github-api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-stalk-someone',
  templateUrl: './stalk-someone.component.html',
  styleUrls: ['./stalk-someone.component.css']
})
export class StalkSomeoneComponent implements OnInit {

  private data = '';

  constructor(
    private route: ActivatedRoute,
    private githubApiService: GithubApiService) {
  }

  ngOnInit() {
    this.route.queryParams
      // .filter(params => params.order)
      .subscribe(params => {
          console.log(params); // { order: "popular" }

          this.githubApiService.getStarred(params.user).subscribe(
            data => {
              console.log(data[0]);
              this.data = data[0].name;
            },
            err => {
              console.error(err);
              this.data = 'User not found';
            },
            () => console.log('done')
          );

        }
      );
  }


}
