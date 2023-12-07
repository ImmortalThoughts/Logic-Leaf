import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsdesigningComponent } from './graphicsdesigning.component';

describe('GraphicsdesigningComponent', () => {
  let component: GraphicsdesigningComponent;
  let fixture: ComponentFixture<GraphicsdesigningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphicsdesigningComponent]
    });
    fixture = TestBed.createComponent(GraphicsdesigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
