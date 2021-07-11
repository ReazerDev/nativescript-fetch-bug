import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'smart-mirror',
    loadChildren: () => import(
      './views/smart-mirror/smart-mirror.module'
    ).then(m => m.SmartMirrorModule)
  },
  {
    path: 'television',
    loadChildren: () => import(
      './views/television/television.module'
    ).then(m => m.TelevisionModule)
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
