import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C4ParametroComponent } from './c4-parametro.component';

describe('C4ParametroComponent', () => {
  let component: C4ParametroComponent;
  let fixture: ComponentFixture<C4ParametroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [C4ParametroComponent]
    });
    fixture = TestBed.createComponent(C4ParametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
