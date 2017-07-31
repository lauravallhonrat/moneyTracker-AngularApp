import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayIncComponent } from './overlay-inc.component';

describe('OverlayIncComponent', () => {
  let component: OverlayIncComponent;
  let fixture: ComponentFixture<OverlayIncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayIncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayIncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
