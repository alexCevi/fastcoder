import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlexerciseComponent } from './htmlexercise.component';

describe('HtmlexerciseComponent', () => {
  let component: HtmlexerciseComponent;
  let fixture: ComponentFixture<HtmlexerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlexerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlexerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
