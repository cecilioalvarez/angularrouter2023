import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C7FacturaComponent } from './c7-factura.component';

describe('C7FacturaComponent', () => {
  let component: C7FacturaComponent;
  let fixture: ComponentFixture<C7FacturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [C7FacturaComponent]
    });
    fixture = TestBed.createComponent(C7FacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
