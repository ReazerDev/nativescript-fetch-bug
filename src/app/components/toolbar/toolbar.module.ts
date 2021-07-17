import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ToolbarComponent } from './toolbar.component';
import { NativeScriptModule } from "@nativescript/angular";

@NgModule({
  imports: [
    NativeScriptModule
  ],
  declarations: [
    ToolbarComponent
  ],
  exports: [ToolbarComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ToolbarModule { }
