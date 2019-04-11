import { Component, OnInit, ViewChild } from '@angular/core';
import { EstadoComponent } from '../estado/estado.component';
import { CidadeComponent } from '../cidade/cidade.component';
import { TabelafreteComponent } from '../tabelafrete/tabelafrete.component';
import { Frete } from '../../models/frete';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Estado } from '../../models/estado';

@Component({
  selector: 'app-frete',
  templateUrl: './frete.component.html',
  styleUrls: ['./frete.component.css']
})
export class FreteComponent implements OnInit {

  displayedColumns: string[] = ['freteId', 'origem', 'destino', 'peso', 'valorTotal', 'editColumn'];

  public estadoComponent: EstadoComponent = new EstadoComponent;
  public cidadeComponent: CidadeComponent = new CidadeComponent;
  public tabelaFreteComponent: TabelafreteComponent = new TabelafreteComponent;
  
  public frete: Frete = new Frete();
  public freteAtualizar: Frete = null;
  public fretes: Array<Frete> = new Array<Frete>();
  public isExpandido: number = 0;
  public dataSource: any;

  @ViewChild(MatPaginator) paginatorCustom: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
  }

  setExpandido() {
    this.isExpandido = 1;
  }

  salvar() {
    if(this.freteAtualizar == null) {
      this.fretes.push(this.frete);
      console.log("Salvou, meu patrão...");
    }else {
      this.atualizar();
    }
    console.log(this.fretes);
    this.freteAtualizar = null;
    this.frete = new Frete();
    this.atualizaTabela();
  }

  remover(freteRemover: Frete) {
    this.fretes.splice(this.fretes.indexOf(freteRemover), 1);
    console.log("Removeu, meu patrão...");
    this.atualizaTabela();
  }

  atualizar() {
    this.fretes[this.fretes.indexOf(this.freteAtualizar)] = this.frete;
    console.log("Atualizou, meu patrão...");
  }

  setFields(freteAtualizar: Frete) {
    this.freteAtualizar = freteAtualizar;
    this.freteAtualizar = new Frete();
    this.freteAtualizar = freteAtualizar;
  }

  limpar() {
    this.frete = new Frete();
    console.log("Limpou, meu patrão...");
  }

  aplicarFiltro(valor: string){
    valor = valor.trim();
    valor = valor.toLowerCase();

    console.log("realiza o filtro com "+valor);
    this.dataSource.filterPredicate = (data: Frete, filter: string ) => 
      data.freteId.toString().indexOf(filter) != -1 ||
      data.peso.toString().indexOf(filter) != -1 ||
      data.valorTotal.toString().indexOf(filter) != -1 ||
      data.origem.descricao.toLowerCase().indexOf(filter) != -1 ||
      data.destino.descricao.toLowerCase().indexOf(filter) != -1;
  
    this.dataSource.filter = valor;
  }

  atualizaTabela() {
    this.dataSource = new MatTableDataSource<Frete>(this.fretes);
    this.dataSource.paginator = this.paginatorCustom;
    this.dataSource.sort = this.sort;
  }

  buscaValorFrete(origem: Estado, destino: Estado) {
    let valor;
    if(origem != null && destino != null) {
      this.tabelaFreteComponent.tabelaFretes.forEach(function(item) {
        if(origem == item.origem && destino == item.destino) {
          valor = item.valor;
        }
      });
      this.frete.valor = valor;
    }
  }

  calculaTotalFrete() {
    if(this.frete.peso != null && this.frete.valor != null) {
      this.frete.valorTotal = this.frete.peso * this.frete.valor;
    }
  }
  
}
