import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SmartMirrorRoutingModule } from "./smart-mirror-routing.module";
import { HomeComponent } from "./home/home.component";
import { MirrorService } from '../../services/mirror.service';
import { QuoteComponent } from "./quote/quote.component";
import { YoutubeComponent } from "./youtube/youtube.component";
import { ToolbarModule } from "~/app/components/toolbar/toolbar.module";

@NgModule({
    imports: [
      SmartMirrorRoutingModule
    ],
    declarations: [
      HomeComponent,
      QuoteComponent,
      YoutubeComponent
    ],
    providers: [MirrorService],
    schemas: [
      NO_ERRORS_SCHEMA
    ]
})
export class SmartMirrorModule { }
