import { Component, OnInit, ViewChild } from '@angular/core';
import { TabelaFrete } from '../../models/tabelaFrete';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-tabelafrete',
  templateUrl: './tabelafrete.component.html',
  styleUrls: ['./tabelafrete.component.css']
})
export class TabelafreteComponent implements OnInit {

  displayedColumns: string[] = ['id', 'origem', 'destino', 'valor', 'editColumn'];

  public tabelaFrete: TabelaFrete = new TabelaFrete();
  public tabelaFreteAtualizar: TabelaFrete = null;
  public tabelaFretes: Array<TabelaFrete> = new Array<TabelaFrete>();
  public tabelaFreteId: number;
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
    if(this.tabelaFreteAtualizar == null) {
      this.tabelaFretes.push(this.tabelaFrete);
      console.log("Salvou, meu patrão...");
    }else {
      this.atualizar();
    }
    console.log(this.tabelaFretes);
    this.tabelaFreteAtualizar = null;
    this.tabelaFrete = new TabelaFrete();
    this.atualizaTabela();
  }

  atualizar() {
    this.tabelaFretes[this.tabelaFretes.indexOf(this.tabelaFreteAtualizar)] = this.tabelaFrete;
    console.log("Atualizou, meu patrão...");
  }

  remover(tabelaFreteRemover: TabelaFrete) {
    this.tabelaFretes.splice(this.tabelaFretes.indexOf(tabelaFreteRemover), 1);
    console.log("Removeu, meu patrão...");
    this.atualizaTabela();
  }

  setFields(tabelaFreteAtualizar: TabelaFrete) {
    this.tabelaFreteAtualizar = tabelaFreteAtualizar;
    this.tabelaFrete = new TabelaFrete();
    this.tabelaFrete = tabelaFreteAtualizar;
  }

  limpar() {
    this.tabelaFrete = new TabelaFrete();
    console.log("Limpou, meu patrão...");
  }

  /*aplicarFiltro(valor: string){
    valor = valor.trim();
    valor = valor.toLowerCase();

    console.log("realiza o filtro com "+valor);
    this.dataSource.filterPredicate = (data: TabelaFrete, filter: string ) => 
      data.tabelaFreteId.toString().indexOf(filter) != -1 ||
      data..toLowerCase().indexOf(filter) != -1;
  
    this.dataSource.filter = valor;
  }*/

  atualizaTabela() {
    this.dataSource = new MatTableDataSource<TabelaFrete>(this.tabelaFretes);
    this.dataSource.paginator = this.paginatorCustom;
    this.dataSource.sort = this.sort;
  }

}
