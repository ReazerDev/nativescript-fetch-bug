import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { AppRoutingModule } from './app-routing.module';
import { NativeScriptMaterialTextFieldModule } from "@nativescript-community/ui-material-textfield/angular";

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    HttpClientModule,
    NativeScriptMaterialTextFieldModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
