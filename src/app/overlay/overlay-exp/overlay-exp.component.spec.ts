import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayExpComponent } from './overlay-exp.component';

describe('OverlayExpComponent', () => {
  let component: OverlayExpComponent;
  let fixture: ComponentFixture<OverlayExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
