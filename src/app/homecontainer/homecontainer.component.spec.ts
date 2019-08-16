import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecontainerComponent } from './homecontainer.component';

describe('HomecontainerComponent', () => {
  let component: HomecontainerComponent;
  let fixture: ComponentFixture<HomecontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomecontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
