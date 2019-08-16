import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisecontainerComponent } from './exercisecontainer.component';

describe('ExercisecontainerComponent', () => {
  let component: ExercisecontainerComponent;
  let fixture: ComponentFixture<ExercisecontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisecontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
