import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirective4Component } from './custom-directive-4.component';

describe('CustomDirective4Component', () => {
  let component: CustomDirective4Component;
  let fixture: ComponentFixture<CustomDirective4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomDirective4Component]
    });
    fixture = TestBed.createComponent(CustomDirective4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
