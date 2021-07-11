import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { TelevisionRoutingModule } from "./television-routing.module";
import { HomeComponent } from "./home/home.component";

@NgModule({
    imports: [
      TelevisionRoutingModule
    ],
    declarations: [
      HomeComponent
    ],
    providers: [],
    schemas: [
      NO_ERRORS_SCHEMA
    ]
})
export class TelevisionModule { }
