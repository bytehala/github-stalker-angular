import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  searchFormGroup = new FormGroup({
    userName: new FormControl(''),
    // lastName: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
  }

  search() {
    console.log('searching', this.searchFormGroup.controls['userName'].value);
  }

}
