import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthepermanentroleComponent } from './forthepermanentrole.component';

describe('ForthepermanentroleComponent', () => {
  let component: ForthepermanentroleComponent;
  let fixture: ComponentFixture<ForthepermanentroleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForthepermanentroleComponent]
    });
    fixture = TestBed.createComponent(ForthepermanentroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
