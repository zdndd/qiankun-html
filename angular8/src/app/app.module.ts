import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { LayoutModule } from "./layout/layout.module";
import { AppComponent } from "./app.component";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
import { DemoComponent } from "./modules/demo/demo.component";
import { ConfigModule, ConfigService } from 'ngx-envconfig';
import { environment } from '../environments/environment'

@NgModule({
  declarations: [AppComponent, EmptyRouteComponent, DemoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ConfigModule.forRoot(environment)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
