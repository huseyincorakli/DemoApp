import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomNgIfDirective]'
})
export class CustomNgIfDirectiveDirective {

  constructor(private templateRef:TemplateRef<any>,
    private viewContainerRef:ViewContainerRef
  ) { }

  @Input() set appCustomNgIfDirective(value:boolean){
    if (value) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
    else{
      this.viewContainerRef.clear();
    }
  }
}
