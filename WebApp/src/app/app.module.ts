import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstadoComponent } from './cadastros/estado/estado.component';
import { CidadeComponent } from './cadastros/cidade/cidade.component';
import { PagenotfoundComponent } from './erros/pagenotfound/pagenotfound.component';
import { FreteComponent } from './cadastros/frete/frete.component';
import { TabelafreteComponent } from './cadastros/tabelafrete/tabelafrete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatRadioModule, MatButtonModule, MatTableModule, MatIconModule,
   MatPaginatorModule, MatSort, MatSortModule, MatExpansionModule, MatSelectModule } from '@angular/material';

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
    AppRoutingModule,
    FormsModule,

    BrowserAnimationsModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule, 
    MatTableModule, 
    MatIconModule, 
    HttpClientModule,
    MatPaginatorModule, 
    MatSortModule, 
    MatExpansionModule, 
    MatSelectModule

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
