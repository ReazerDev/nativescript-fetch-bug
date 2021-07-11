import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SmartMirrorRoutingModule } from "./smart-mirror-routing.module";
import { HomeComponent } from "./home/home.component";
import { MirrorService } from '../../services/mirror.service';

@NgModule({
    imports: [
      SmartMirrorRoutingModule
    ],
    declarations: [
      HomeComponent
    ],
    providers: [MirrorService],
    schemas: [
      NO_ERRORS_SCHEMA
    ]
})
export class SmartMirrorModule { }
