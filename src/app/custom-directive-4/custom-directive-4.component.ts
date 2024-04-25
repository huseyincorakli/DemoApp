import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-directive-4',
  template: `
  <p appExample backgroundColor="green" writeColor="white">custom-directive-4 works!</p>
  `,
  styleUrls: ['./custom-directive-4.component.scss']
})
export class CustomDirective4Component {

//custom directive oluşturmak için angular cli'a  " ng generate (yada g) directive (ya da d) dosyadizinismi/directive_adi " seklinde komut girmeliyiz
// bu komut sonucunda app->dosyadizinismi-> içerisinde directive klasörü oluşacaktır
//Diğer noktalar için directives/example.directive.ts dosyasını aç
}
