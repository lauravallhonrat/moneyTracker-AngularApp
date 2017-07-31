import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetsListComponent } from './budgets-list.component';

describe('BudgetsListComponent', () => {
  let component: BudgetsListComponent;
  let fixture: ComponentFixture<BudgetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
