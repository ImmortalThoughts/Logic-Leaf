import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitCVComponent } from './submit-cv.component';

describe('SubmitCVComponent', () => {
  let component: SubmitCVComponent;
  let fixture: ComponentFixture<SubmitCVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitCVComponent]
    });
    fixture = TestBed.createComponent(SubmitCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
