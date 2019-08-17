import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsexerciseComponent } from './jsexercise.component';

describe('JsexerciseComponent', () => {
  let component: JsexerciseComponent;
  let fixture: ComponentFixture<JsexerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsexerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsexerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
