import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-3',
  template: `
  <!-- NGFOR DIRECTIVE -->
  <div style="border:2px solid black">
  <h3>ngFor directive</h3>
  <ul>
    <li *ngFor="let name of names;index as i ">{{name}} -{{i}}</li>
  </ul>
  </div>
    <!-- NGIF DIRECTIVE -->
  <div style="border:2px solid black">
  <h3>ngIf directive</h3>
  <ul>
    <li *ngIf="visible" else>Visible {{visible}}</li>
    <li *ngIf="!visible">Visible {{visible}}</li>
  <button (click)="changeVisible(visible)">changeVisible</button>
  </ul>
  </div>
    <!-- NGSWITCH DIRECTIVE -->
    <div style="border:2px solid black">
  <h3>ngSwitch directive</h3>
      <ul [ngSwitch]="visible">
        <li *ngSwitchCase="true"> VISIBLE TRUE</li>
        <li *ngSwitchCase="false">VISIBLE FALSE</li>
        <li *ngSwitchDefault="null">VISIBLE IS NULL</li>
      </ul>
  </div>

  `,
  styleUrls: ['./directives-3.component.scss']
})
export class Directives3Component {
  //Directive html elemanlarına ekstra özellikler ve davranışlar ekleme bu elemanları manipüle etmek
  //istiyorsak bu özel etiketleri ya da kendi custom directivelerimizi kullanırız.

  //ngModel: two way bind işlemi yapmamızı sağlayan bir directivedir
  //ngNonBindable : compile işleminin etkisiz kılan directivedir
  names: string[] = ["ali", "büşra", "cemil", "doruk"]
  visible: boolean = false;

  changeVisible(value: boolean) {
    this.visible = !value;
  }
}
