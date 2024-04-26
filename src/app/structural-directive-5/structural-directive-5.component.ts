import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-5',
  template:`
  1-Structural Directive : HTML nesnesini ve DOM yapısını fiziksel olarak manipüle ederek sayfa üzerinde değişiklik yapmamızı sağlayan directivelerdir. <br>
  2- başında * işareti eklenerek kullanılır <br>
  3-ViewContainerRef ve TemplateRef sınıflarının inject edilmesi gerekmektedir. <br>
  4-ViewContainerRef: Bir templatein içeriğini içeren container referansıdır. Bu container içerisinde dinamik olarak html elemanları ekleyip çıkarmamızı sağlar. <br>
  5-TemplateRef: Directivein kullanıldığı template'i temsil eder.
  6-Bu directiveler oluşturulurken yine cli kullanılır <br>
  7-Dışarıdan bir değer alacağı için bir property tanımlanmalı ancak bu property directivein selectoru ile aynı isimde olmalıdır.
  <hr>
  <ul>
    <li *appStructuralDirective="names; let name;let index=index">{{name}} -{{index}}</li>
  </ul>

  <div *appCustomNgIfDirective="true">
  göster
</div>
  `,
  styleUrls: ['./structural-directive-5.component.scss']
})
export class StructuralDirective5Component {
names :string[]=["AHMET","MEHMET","ALİ","OSMAN"]
}
