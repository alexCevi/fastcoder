import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseareaComponent } from './exercisearea.component';

describe('ExerciseareaComponent', () => {
  let component: ExerciseareaComponent;
  let fixture: ComponentFixture<ExerciseareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
