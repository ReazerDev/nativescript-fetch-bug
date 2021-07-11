import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { HomeComponent } from "./home/home.component";
import { QuoteComponent } from "./quote/quote.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: "home", component: HomeComponent },
      { path: "quote", component: QuoteComponent },
    ]
  }
];


@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class SmartMirrorRoutingModule { }
