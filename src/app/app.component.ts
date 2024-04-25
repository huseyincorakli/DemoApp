import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template:`
  <h1>Ders-1</h1>
  <app-data-binding [propertyBindingExample3]="propertyBindingExample3"></app-data-binding>
  <hr>
  <h1>Ders-2</h1>
  <app-interpolation-syntax-2></app-interpolation-syntax-2>
  <hr>
  <h1>Ders-3</h1>
  <app-directives-3></app-directives-3>
  <h1>Ders-4</h1>
  <app-custom-directive-4></app-custom-directive-4>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  propertyBindingExample3 = 'DemoApp';
}
