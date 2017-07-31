import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsItemsComponent } from './charts-items.component';

describe('ChartsItemsComponent', () => {
  let component: ChartsItemsComponent;
  let fixture: ComponentFixture<ChartsItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
