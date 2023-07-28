import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortaCadeados2Component } from './porta-cadeados2.component';

describe('PortaCadeados2Component', () => {
  let component: PortaCadeados2Component;
  let fixture: ComponentFixture<PortaCadeados2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortaCadeados2Component]
    });
    fixture = TestBed.createComponent(PortaCadeados2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
