import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { DocsComponent } from './docs/docs.component';


@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      AboutComponent,
      TeamComponent,
      DocsComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
