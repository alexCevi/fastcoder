import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomctaComponent } from './bottomcta.component';

describe('BottomctaComponent', () => {
  let component: BottomctaComponent;
  let fixture: ComponentFixture<BottomctaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomctaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomctaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
