import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructuralDirective]'
})
export class StructuralDirectiveDirective {

  constructor(private viewContainerRef:ViewContainerRef,
    private templateRef:TemplateRef<any>
  ) { }

  @Input()  set appStructuralDirective(value:string[]){
    for(let i =0;i<value.length;i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef,{
        $implicit:value[i],
        index:i
      })
    }
  }
}
