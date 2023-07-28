import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortaCadeadosComponent } from './porta-cadeados.component';

describe('PortaCadeadosComponent', () => {
  let component: PortaCadeadosComponent;
  let fixture: ComponentFixture<PortaCadeadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortaCadeadosComponent]
    });
    fixture = TestBed.createComponent(PortaCadeadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
