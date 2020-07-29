import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  searchFormGroup = new FormGroup({
    userName: new FormControl(''),
  });
  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
    // console.log('searching', this.searchFormGroup.controls['userName'].value);
    const userToStalk = this.searchFormGroup.controls['userName'].value;
    this.router.navigate(['/stalk'], { queryParams: { user: userToStalk } });
  }

}
