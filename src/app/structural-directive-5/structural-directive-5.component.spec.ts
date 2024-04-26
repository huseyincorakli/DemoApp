import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirective5Component } from './structural-directive-5.component';

describe('StructuralDirective5Component', () => {
  let component: StructuralDirective5Component;
  let fixture: ComponentFixture<StructuralDirective5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StructuralDirective5Component]
    });
    fixture = TestBed.createComponent(StructuralDirective5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
