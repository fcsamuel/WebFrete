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
  public isExpandido: number = 0;

  public cep: string;
  public cepAtualizar: string = null;
  public dataSourceCep: any;
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
    if(this.cepAtualizar = null) {
      this.cidade.ceps.push(this.cep);
      console.log("Salvou, meu patrão...");
    }else {
      this.atualizarCep();
    }
    console.log(this.cidade.ceps);
    this.cepAtualizar = null;
    this.cep = "";
    this.atualizaTabelaCep();
  }

  removerCep(cepRemover: string) {
    this.cidade.ceps.splice(this.cidade.ceps.indexOf(cepRemover), 1);
    console.log("Removeu, meu patrão...");
    this.atualizaTabelaCep();
  }

  atualizarCep() {
    this.cidade.ceps[this.cidade.ceps.indexOf(this.cepAtualizar)] = this.cep;
    console.log("Atualizou, meu patrão...");
  }

  setFieldsCep(cepAtualizar: string) {
    this.cepAtualizar = cepAtualizar;
    this.cep = "";
    this.cep = cepAtualizar;
  }

  limparCep() {
    this.cep = "";
    console.log("Limpou, meu patrão...");
  }

  aplicarFiltroCep(valor: string) {
    valor = valor.trim(); // Remove whitespace
    valor = valor.toLowerCase();

    console.log("realiza o filtro com "+valor);
    this.dataSourceCep.filterPredicate = (data: string, filter: string ) => 
      data.toLowerCase().indexOf(filter) != -1;
  
    this.dataSource.filter = valor;
  }

  atualizaTabelaCep() {
    this.dataSourceCep = new MatTableDataSource<string>(this.cidade.ceps);
    this.dataSourceCep.paginator = this.paginatorCustom;
    this.dataSourceCep.sort = this.sort;
  }
  //#endregion
  
  //#region CIDADE
  setExpandido() {
    this.isExpandido = 1;
  }

  salvar() {
    if(this.cidadeAtualizar == null) {
      this.cidade.estado = this.estado;
      this.cidade.ceps = new Array<string>();
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
