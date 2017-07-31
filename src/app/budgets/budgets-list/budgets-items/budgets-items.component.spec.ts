import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetsItemsComponent } from './budgets-items.component';

describe('BudgetsItemsComponent', () => {
  let component: BudgetsItemsComponent;
  let fixture: ComponentFixture<BudgetsItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetsItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
