import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectviewComponent } from './selectview.component';

describe('SelectviewComponent', () => {
  let component: SelectviewComponent;
  let fixture: ComponentFixture<SelectviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
