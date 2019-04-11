import { Component, OnInit, ViewChild } from '@angular/core';
import { Cidade } from '../../models/cidade';
import { Estado } from '../../models/estado';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { EstadoComponent } from '../estado/estado.component';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {

  displayedColumns: string[] = ['cidadeId', 'descricao', 'estado', 'editColumn'];
  displayedColumnsCep: string[] = [];
  
  public cidade: Cidade = new Cidade();
  public estado: Estado = new Estado();
  public cidades: Array<Cidade> = new Array<Cidade>();
  public cidadeAtualizar: Cidade = null;
  public estadoComponent: EstadoComponent = new EstadoComponent;
  public dataSource: any;
  public dataSourceCep: any;
  public isExpandido: number = 0;
  public isExpandidoCep: number = 0;

  @ViewChild(MatPaginator) paginatorCustom: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
   }

  ngOnInit() {
  }

  //#region CEP
  setExpandidoCep() {
    this.isExpandidoCep = 1;
  }

  salvarCep() {

  }

  removerCep() {

  }

  atualizarCep() {

  }

  setFieldsCep() {

  }

  limparCep() {

  }

  aplicarFiltroCep() {

  }

  atualizaTabelaCep() {
    
  }
  //#endregion
  
  //#region CIDADE
  setExpandido() {
    this.isExpandido = 1;
  }

  salvar() {
    if(this.cidadeAtualizar == null) {
      this.cidade.estado = this.estado;
      this.cidades.push(this.cidade);
      this.estado.cidades.push(this.cidade);
      console.log("Salvou, meu patrão...");
    }else {
      this.atualizar();
    }
    console.log(this.cidades);
    this.cidadeAtualizar = null;
    this.cidade = new Cidade();
    this.atualizaTabela();
  }

  remover(cidadeRemover: Cidade) {
    this.cidades.splice(this.cidades.indexOf(cidadeRemover), 1);
    cidadeRemover.estado.cidades.splice(this.cidades.indexOf(cidadeRemover), 1);
    console.log("Removeu, meu patrão...");
    this.atualizaTabela();
  }

  atualizar() {
    this.cidades[this.cidades.indexOf(this.cidadeAtualizar)] = this.cidade;
    this.cidadeAtualizar.estado.cidades[this.cidades.indexOf(this.cidadeAtualizar)] = this.cidade;
    console.log("Atualizou, meu patrão...");
  }

  setFields(cidadeAtualizar: Cidade) {
    this.cidadeAtualizar = cidadeAtualizar;
    this.cidade = new Cidade();
    this.cidade = cidadeAtualizar;
  }
  
  limpar() {
    this.cidade = new Cidade();
    console.log("Limpou, meu patrão...");
  }

  aplicarFiltro(valor: string){
    valor = valor.trim(); // Remove whitespace
    valor = valor.toLowerCase();

    console.log("realiza o filtro com "+valor);
    this.dataSource.filterPredicate = (data: Cidade, filter: string ) => 
      data.cidadeId.toString().indexOf(filter) != -1 ||
      data.descricao.toLowerCase().indexOf(filter) != -1 ||
      data.estado.descricao.toLowerCase().indexOf(filter) != -1;
  
    this.dataSource.filter = valor;
  }

  atualizaTabela() {
    this.dataSource = new MatTableDataSource<Cidade>(this.cidades);
    this.dataSource.paginator = this.paginatorCustom;
    this.dataSource.sort = this.sort;
  }
  //#endregion

}
