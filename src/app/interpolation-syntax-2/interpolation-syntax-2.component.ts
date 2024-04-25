import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-syntax-2',
 template:`
 <input type="text" value={{text}}>
 {{text}}<br>
 {{script}}<br>
 <p ngNonBindable> {{ngNonBindField}}</p>
 <p>{{interPipe | uppercase}}</p><br>
 {{interNull?.deger2}}
 {{interNull?.deger1}}
 <br>
 {{interNonNull!.deger3}}
 {{interNonNull!.deger4}}
 `,
  styleUrls: ['./interpolation-syntax-2.component.scss']
})
export class InterpolationSyntax2Component {

  //buradaki bind işlemi one way bindingdir yani tek yönlüdür
text :string="merhaba";
//script veya html kodları xss hatalarına karşı önlem sebebiyle yalın halde yazılır.
script:string = "<script>alert('merhaba')</script>"
//interpolation compile edilmemesini istediğimiz durumlarda ngNonbindable operatörü kullan
ngNonBindField:string ="Field içeriği"
//interpolation pipe kullanımı
interPipe:string ="IP pipe kullanımı"
//interpolation nullable kullanımı
interNull :{deger1:string ,deger2:string}={deger1:"Abc",deger2:null};
//interpoaltion non null assertion operatoru 
interNonNull:{deger3:string,deger4:string}={deger3:"XYZ",deger4:null};
}
