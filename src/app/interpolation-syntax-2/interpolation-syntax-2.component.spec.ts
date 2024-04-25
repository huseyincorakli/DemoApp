import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationSyntax2Component } from './interpolation-syntax-2.component';

describe('InterpolationSyntax2Component', () => {
  let component: InterpolationSyntax2Component;
  let fixture: ComponentFixture<InterpolationSyntax2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterpolationSyntax2Component]
    });
    fixture = TestBed.createComponent(InterpolationSyntax2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
