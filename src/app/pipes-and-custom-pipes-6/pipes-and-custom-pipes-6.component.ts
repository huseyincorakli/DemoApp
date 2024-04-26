import { Component } from '@angular/core';
import { CustomPipePipe } from '../pipes/custom-pipe.pipe';

@Component({
  selector: 'app-pipes-and-custom-pipes-6',
  template:`
  1-currency pipe : para birimine çevirme pipe <br>
  2- date pipe : tarih formatlandırma <br>
  3- slice pipe : bir dizideki verilen  aralığı getirme  +..dizi | slice: 1: 3..+
  4-json pipe: nesneyi json formatına dönüştürür +..nesne |json..+
  5-uppercase lowecase pipe : verilen string değeri küçük harf ya da büyük harf yapar
  6-titlecase pipe : verilen string değerdeki her kelimenin baş harfini büyük yapar 
  7-key value pipe:
  <ul>
    <li *ngFor="let name of names |keyvalue">{{name.key}}-{{name.value}}</li>
  </ul>
  -------------------------------------- <br>
  Custom Pipe Nasıl Yapılır? <br>
  Angular Cli kullanarak : "ng g p __name__" komutu ile oluşturulur <br>
  devamı için pipes içerisindeki custom-pipe aç <br>
  {{"BU BİR CUSTOM PİPEDIR"|customPipe :6:18}} <br>
  bir pipe oluşturduk ve bu pipe ı başka operasyonlarda kullanmak istiyorsak  app modulde providers olarak o pipe verdiğimizde 
  IOC'e singleton oluşturur böylece kullanmak istediğimiz service yada class da constructorda çağıraıarak bu pipe dan istifade edebiliriz
  `,
  styleUrls: ['./pipes-and-custom-pipes-6.component.scss']
})
export class PipesAndCustomPipes6Component {
  names :Map<string,string> = new Map([["ahmet_id","ahmet"],["cabbar_id","cabbar"],["mustafa_id","mustafa"]])
  
  //custom pipe class da kullanımı
  constructor(custom:CustomPipePipe) {
    console.log(custom.transform("ABCDEK",1,4));
    
  }
}
