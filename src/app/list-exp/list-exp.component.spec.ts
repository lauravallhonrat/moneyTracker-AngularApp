import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExpComponent } from './list-exp.component';

describe('ListExpComponent', () => {
  let component: ListExpComponent;
  let fixture: ComponentFixture<ListExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
