import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortaCadeadosComponent } from './components/porta-cadeados/porta-cadeados.component';
import { PortaCadeados2Component } from './components/porta-cadeados2/porta-cadeados2.component';
import { PortaCadeados3Component } from './components/porta-cadeados3/porta-cadeados3.component';
import { GatinhosComponent } from './components/gatinhos/gatinhos.component';

@NgModule({
  declarations: [
    AppComponent,
    PortaCadeadosComponent,
    PortaCadeados2Component,
    PortaCadeados3Component,
    GatinhosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
