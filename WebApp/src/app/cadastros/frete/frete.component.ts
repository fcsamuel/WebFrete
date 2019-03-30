import { Component, OnInit } from '@angular/core';
import { EstadoComponent } from '../estado/estado.component';
import { CidadeComponent } from '../cidade/cidade.component';
import { TabelafreteComponent } from '../tabelafrete/tabelafrete.component';
import { Frete } from '../../models/frete';

@Component({
  selector: 'app-frete',
  templateUrl: './frete.component.html',
  styleUrls: ['./frete.component.css']
})
export class FreteComponent implements OnInit {

  public estadoComponent: EstadoComponent = new EstadoComponent;
  public cidadeComponent: CidadeComponent = new CidadeComponent;
  public tabelaFreteComponent: TabelafreteComponent = new TabelafreteComponent;
  
  public freteList: Array<Frete>;

  constructor() { }

  ngOnInit() {
  }

  //#region CADASTROS
  salvarEstado() {
    this.estadoComponent.salvar();
  }
  salvarCidade() {
    this.cidadeComponent.salvar();
  }

  removerEstado() {
    this.estadoComponent.remover();
  }
  removerCidade() {
    this.cidadeComponent.remover();
  }

  salvarTabelaFrete() {
    this.tabelaFreteComponent.salvar();
  }
  removerTabelaFrete() {
    this.tabelaFreteComponent.remover();
  }
  //#endregion

  //#region FRETE
  salvar() {

  }

  remover() {

  }
  //#endregion
}
