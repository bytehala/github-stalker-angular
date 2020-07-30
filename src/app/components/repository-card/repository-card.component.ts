import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.scss']
})
export class RepositoryCardComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
