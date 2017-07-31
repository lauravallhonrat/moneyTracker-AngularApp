import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsItemsComponent } from './transactions-items.component';

describe('TransactionsItemsComponent', () => {
  let component: TransactionsItemsComponent;
  let fixture: ComponentFixture<TransactionsItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
