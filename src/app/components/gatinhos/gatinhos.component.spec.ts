import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatinhosComponent } from './gatinhos.component';

describe('GatinhosComponent', () => {
  let component: GatinhosComponent;
  let fixture: ComponentFixture<GatinhosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GatinhosComponent]
    });
    fixture = TestBed.createComponent(GatinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
