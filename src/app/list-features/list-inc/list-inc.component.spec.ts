import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIncComponent } from './list-inc.component';

describe('ListIncComponent', () => {
  let component: ListIncComponent;
  let fixture: ComponentFixture<ListIncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
