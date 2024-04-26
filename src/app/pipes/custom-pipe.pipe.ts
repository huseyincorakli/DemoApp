import { Pipe, PipeTransform } from '@angular/core';
//bir classın pipe olması için Pipe decorator ile işaretlenmesi gerekmektedir.
@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  //value parametresi bizim manipüle edeceğimiz değerdir.
  transform(value: string, a:number,b:number): string {
    return value.slice(a,b);
    //kullanım sonucu için pipes and custom pipes- 6 bak
  }

}
