import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  MatSidenavModule,
} from "@angular/material";

import { AppComponent } from "./app.component";
import { AppRouterModule } from "./app.router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { PageNotFoundComponent } from "./foundation/page-not-found/page-not-found.component";
import { FocusDirective } from "./shared/directives/focus.directive";

@NgModule({
  declarations: [
    // Components
    AppComponent,
    PageNotFoundComponent,
    DashboardComponent,
    // Directives
    FocusDirective
  ],
  imports: [
    // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    // Material imports
    MatSidenavModule,
    // Router
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
