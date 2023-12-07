import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingserviceComponent } from './staffingservice.component';

describe('StaffingserviceComponent', () => {
  let component: StaffingserviceComponent;
  let fixture: ComponentFixture<StaffingserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffingserviceComponent]
    });
    fixture = TestBed.createComponent(StaffingserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
