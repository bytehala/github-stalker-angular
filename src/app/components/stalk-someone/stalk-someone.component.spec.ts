import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StalkSomeoneComponent } from './stalk-someone.component';

describe('StalkSomeoneComponent', () => {
  let component: StalkSomeoneComponent;
  let fixture: ComponentFixture<StalkSomeoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StalkSomeoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StalkSomeoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
