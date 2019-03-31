import { Component, OnInit } from '@angular/core';
import { TabelaFrete } from '../../models/tabelaFrete';
@Component({
  selector: 'app-tabelafrete',
  templateUrl: './tabelafrete.component.html',
  styleUrls: ['./tabelafrete.component.css']
})
export class TabelafreteComponent implements OnInit {

  displayedColumns: string[] = ['origem', 'destino', 'valor'];

  public tabelasFretes: Array<TabelaFrete>;
  public isExpandido: number;

  constructor() { }

  ngOnInit() {
    this.tabelasFretes = new Array<TabelaFrete>();
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
