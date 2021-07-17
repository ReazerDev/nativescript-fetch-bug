import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule, NativeScriptHttpClientModule } from '@nativescript/angular';
import { AppRoutingModule } from './app-routing.module';
import { NativeScriptMaterialTextFieldModule } from "@nativescript-community/ui-material-textfield/angular";
import { ToolbarModule } from './components/toolbar/toolbar.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { CommonModule } from '@angular/common';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptHttpClientModule,
    NativeScriptModule,
    CommonModule,
    AppRoutingModule,
    NativeScriptMaterialTextFieldModule,
    ToolbarModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
