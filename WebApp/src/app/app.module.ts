import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstadoComponent } from './cadastros/estado/estado.component';
import { CidadeComponent } from './cadastros/cidade/cidade.component';
import { PagenotfoundComponent } from './erros/pagenotfound/pagenotfound.component';
import { FreteComponent } from './cadastros/frete/frete.component';
import { TabelafreteComponent } from './cadastros/tabelafrete/tabelafrete.component';

@NgModule({
  declarations: [
    AppComponent,
    EstadoComponent,
    CidadeComponent,
    PagenotfoundComponent,
    FreteComponent,
    TabelafreteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
