import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopinfoComponent } from './topinfo.component';

describe('TopinfoComponent', () => {
  let component: TopinfoComponent;
  let fixture: ComponentFixture<TopinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
