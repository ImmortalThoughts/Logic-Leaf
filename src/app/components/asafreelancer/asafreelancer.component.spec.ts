import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsafreelancerComponent } from './asafreelancer.component';

describe('AsafreelancerComponent', () => {
  let component: AsafreelancerComponent;
  let fixture: ComponentFixture<AsafreelancerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsafreelancerComponent]
    });
    fixture = TestBed.createComponent(AsafreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
