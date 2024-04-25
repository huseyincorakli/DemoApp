import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Directives3Component } from './directives-3.component';

describe('Directives3Component', () => {
  let component: Directives3Component;
  let fixture: ComponentFixture<Directives3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Directives3Component]
    });
    fixture = TestBed.createComponent(Directives3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
