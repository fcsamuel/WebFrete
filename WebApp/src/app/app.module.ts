import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstadoComponent } from './Model/estado/estado.component';
import { CidadeComponent } from './Model/cidade/cidade.component';

@NgModule({
  declarations: [
    AppComponent,
    EstadoComponent,
    CidadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
