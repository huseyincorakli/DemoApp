import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding-1/data-binding.component';
import { FormsModule } from '@angular/forms';
import { InterpolationSyntax2Component } from './interpolation-syntax-2/interpolation-syntax-2.component';
import { Directives3Component } from './directives-3/directives-3.component';
import { CustomDirective4Component } from './custom-directive-4/custom-directive-4.component';
import { ExampleDirective } from './directives/example.directive';
import { StructuralDirective5Component } from './structural-directive-5/structural-directive-5.component';
import { StructuralDirectiveDirective } from './directives/structural-directive.directive';
import { CustomNgIfDirectiveDirective } from './directives/custom-ng-if-directive.directive';
import { PipesAndCustomPipes6Component } from './pipes-and-custom-pipes-6/pipes-and-custom-pipes-6.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InterpolationSyntax2Component,
    Directives3Component,
    CustomDirective4Component,
    ExampleDirective,
    StructuralDirective5Component,
    StructuralDirectiveDirective,
    CustomNgIfDirectiveDirective,
    PipesAndCustomPipes6Component,
    CustomPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CustomPipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
