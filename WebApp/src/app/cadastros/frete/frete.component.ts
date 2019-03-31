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

  displayedColumns: string[] = ['freteId', 'tabelaFreteComponent.origem', 'tabelaFreteComponent.destino', 'peso', 'valorTotal'];

  public estadoComponent: EstadoComponent = new EstadoComponent;
  public cidadeComponent: CidadeComponent = new CidadeComponent;
  public tabelaFreteComponent: TabelafreteComponent = new TabelafreteComponent;
  
  public fretes: Array<Frete>;
  public isExpandido: number;

  constructor() { }

  ngOnInit() {
    this.fretes = new Array<Frete>();
    this.isExpandido = 0;
  }

  setExpandido() {
    this.isExpandido = 1;
  }

  salvar() {
    
  }

  remover() {

  }

  atualizar() {

  }

  limpar() {
    
  }

  aplicarFiltro(valor: string){
    
  }
}
