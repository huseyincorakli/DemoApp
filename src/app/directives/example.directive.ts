import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { EventType } from '@angular/router';

//bir sınıfın directive olabilmesi için @Directive decorator tarafından işaretlenmiş olması gerekmektedir.
@Directive({
  selector: '[appExample]'
})
//Directive köşeli parantez olarak tanımlanmış ise attribute olarak kullanılacağını 
//yok . ile tanımlanmış ise {selector:'.appExample'} class olarak kullanılacağı anlamına gelmektedir.

//attriburte kullanımı <div appExample></div>
//class kullanımı <div class="appExample"></div>

//parametre oluşturmak için Input field tanımlamak yeterlidir.
export class ExampleDirective implements OnInit {
  constructor(private element:ElementRef) { }
  @Input() backgroundColor:string;
  //constructor dan sonra çalışan fonksiyondur!
  ngOnInit(){
    this.element.nativeElement.style.backgroundColor=this.backgroundColor;
  }

  //HostListener oluşturulan directive hangi event ile görevlendirelceğini belirlemzii sağlayan decoratordür
  //Örneğin oluşturdğumuz directive ile işaretlenmiş bir html nesnesi üzerinde click eventi gerçekleştirildiğinde bir işlem yapalım
  @HostListener("mouseover")
  eventSonrasiCalisacakFonksiyon(){
    alert("Kullanıcı nesne üzerine hover oldu !")
  }

  //HostBinding işaretlenmiş olan nesnenin bir özelliğine bind olabiliriz.
  @HostBinding("style.color")
  @Input() writeColor:string="blue";
}
