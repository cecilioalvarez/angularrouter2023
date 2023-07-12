import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C6selectComponent } from './c6select.component';

describe('C6selectComponent', () => {
  let component: C6selectComponent;
  let fixture: ComponentFixture<C6selectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [C6selectComponent]
    });
    fixture = TestBed.createComponent(C6selectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
