import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { HomeComponent } from "./home/home.component";
import { QuoteComponent } from "./quote/quote.component";
import { YoutubeComponent } from "./youtube/youtube.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: "home", component: HomeComponent },
      { path: "quote", component: QuoteComponent },
      { path: "youtube", component: YoutubeComponent },
    ]
  }
];


@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class SmartMirrorRoutingModule { }
