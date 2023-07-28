import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortaCadeados3Component } from './porta-cadeados3.component';

describe('PortaCadeados3Component', () => {
  let component: PortaCadeados3Component;
  let fixture: ComponentFixture<PortaCadeados3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortaCadeados3Component]
    });
    fixture = TestBed.createComponent(PortaCadeados3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
