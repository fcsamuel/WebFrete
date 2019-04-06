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

  displayedColumns: string[] = ['origem', 'destino', 'valor', 'editColumn'];

  public tabelaFrete: TabelaFrete = new TabelaFrete();
  public tabelaFreteAtualizar: TabelaFrete = null;
  public tabelasFretes: Array<TabelaFrete> = new Array<TabelaFrete>();
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

  }

  remover(tabelaFreteRemover: TabelaFrete) {

  }

  setFields(tabelaFreteAtualizar: TabelaFrete) {
    
  }

  limpar() {
    this.tabelaFrete = new TabelaFrete();
    console.log("Limpou, meu patrão...");
  }

  aplicarFiltro(valor: string){
    
  }

  atualizaTabela() {
    this.dataSource = new MatTableDataSource<TabelaFrete>(this.tabelasFretes);
    this.dataSource.paginator = this.paginatorCustom;
    this.dataSource.sort = this.sort;
  }

}
