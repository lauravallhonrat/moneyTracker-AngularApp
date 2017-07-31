import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsPopUpComponent } from './transactions-pop-up.component';

describe('TransactionsPopUpComponent', () => {
  let component: TransactionsPopUpComponent;
  let fixture: ComponentFixture<TransactionsPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
