import {Component, OnInit} from '@angular/core';
import {GithubApiService} from '../../services/github-api.service';

@Component({
  selector: 'app-stalk-someone',
  templateUrl: './stalk-someone.component.html',
  styleUrls: ['./stalk-someone.component.css']
})
export class StalkSomeoneComponent implements OnInit {

  private data = 'testData';

  constructor(private githubApiService: GithubApiService) {
  }

  ngOnInit() {
    this.data = 'blablabla';
    this.githubApiService.getStarred().subscribe(
      data => {
        console.log(data);
      },
      err => console.error(err),
      () => console.log('done loading foods')
    );
  }


}
