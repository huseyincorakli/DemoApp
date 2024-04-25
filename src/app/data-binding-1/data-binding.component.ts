import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  template:`
  <!-- text interpolation -->
  {{textInterpolation}} <br>
  
  <!-- property binding -->
  <input type="text" [value]="propertyBinding" [disabled]="propertyBindingExample2">
  <p [innerText]="propertyBindingExample3"></p>

  <!-- event binding -->
  <button (click)="eventBinding();eventBinding2()">Event Binding</button><br>
  <input  (keydown.shift.a)="eventBinding3()"><br>

  <!-- two way data binding -->
  <input [(ngModel)]="twowaydatabinding"/>
  {{twowaydatabinding}}

  <p [style.background-color]="bgColor" [style.color]="txtColor">Style & Class binding</p>
  `,
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
//text interpolation
textInterpolation ="textInterpolation"
//property binding (attribute binding)
propertyBinding = "propertyBinding"
propertyBindingExample2:boolean=true;
@Input() propertyBindingExample3:string ;
twowaydatabinding:string="abd";

//event binding
eventBinding(){
  alert("event binding örnek 1")
}
eventBinding2(){
  alert("event binding örnek 2")
}
eventBinding3(){
  alert("event binding örnek 3")
}

//style & class binding 
bgColor:string ="blue";
txtColor:string ="white";

}
