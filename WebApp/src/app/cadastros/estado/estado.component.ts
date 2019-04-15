import { Component, OnInit, ViewChild } from '@angular/core';
import { Estado } from '../../models/estado';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cidade } from '../../models/cidade';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  displayedColumns: string[] = ['estadoId', 'sigla', 'descricao', 'editColumn'];

  public estado: Estado = new Estado();
  public estadoAtualilzar: Estado = null;
  public estados: Array<Estado> = new Array<Estado>();
  public isExpandido: number = 0;
  public dataSource: any;
  public estadoSel: Estado = new Estado();
  public estadoSelId: number;

  @ViewChild(MatPaginator) paginatorCustom: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
  }

  atualizaListBoxCidades() {
    
  }

  setExpandido() {
    this.isExpandido = 1;
  }

  salvar() {
    if(this.estadoAtualilzar == null) {
      this.estado.cidades = new Array<Cidade>();
      this.estados.push(this.estado);
      console.log("Salvou, meu patrão...");
    }else {
      this.atualizar();
    }
    console.log(this.estados);
    this.estadoAtualilzar = null;
    this.estado = new Estado();
    this.atualizaTabela();
  }

  remover(estadoRemover: Estado) {
    this.estados.splice(this.estados.indexOf(estadoRemover), 1);
    console.log("Removeu, meu patrão...");
    this.atualizaTabela();
  }

  atualizar() {
    this.estados[this.estados.indexOf(this.estadoAtualilzar)] = this.estado;
    console.log("Atualizou, meu patrão...");
  }

  setFields(estadoAtualizar: Estado) {
    this.estadoAtualilzar = estadoAtualizar;
    this.estado = new Estado();
    this.estado = estadoAtualizar;
  }

  limpar() {
    this.estado = new Estado();
    console.log("Limpou, meu patrão...");
  }

  aplicarFiltro(valor: string){
    valor = valor.trim(); // Remove whitespace
    valor = valor.toLowerCase();

    console.log("realiza o filtro com "+valor);
    this.dataSource.filterPredicate = (data: Estado, filter: string ) => 
      data.estadoId.toString().indexOf(filter) != -1 ||
      data.sigla.toLowerCase().indexOf(filter) != -1 ||
      data.descricao.toLowerCase().indexOf(filter) != -1;
  
    this.dataSource.filter = valor;
  }

  atualizaTabela() {
    this.dataSource = new MatTableDataSource<Estado>(this.estados);
    this.dataSource.paginator = this.paginatorCustom;
    this.dataSource.sort = this.sort;
  }

}
