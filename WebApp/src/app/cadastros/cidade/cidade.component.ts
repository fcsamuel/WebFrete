import { Component, OnInit, ViewChild } from '@angular/core';
import { Cidade } from '../../models/cidade';
import { Estado } from '../../models/estado';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {

  displayedColumns: string[] = ['cidadeId', 'descricao', 'estado'];
  
  public cidade: Cidade = new Cidade();
  public cidades: Array<Cidade> = new Array<Cidade>();
  public cidadeSelec: Cidade = new Cidade();
  public estado: Estado = new Estado();
  public estados: Array<Estado> = new Array<Estado>();
  public dataSource: any;
  public palavraChave: string;
  public isExpandido: number = 0;

  @ViewChild(MatPaginator) paginatorCustom: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
   }

  ngOnInit() {
  }

  setExpandido() {
    this.isExpandido = 1;
  }

  carregaDados() {
    this.estado.estadoId = 1;
    this.estado.descricao = "Paraná";
    this.estado.sigla = "PR";
    this.estados.push(this.estado);

    this.cidade.cidadeId = 1;
    this.cidade.descricao = "Toledo";
    this.cidade.estado = this.estado;
    this.cidade.ceps.push("123123123");
    this.cidade.ceps.push("534534555");
    this.cidade.ceps.push("132377889");
    this.cidade.ceps.push("784563527");
    this.cidade.ceps.push("268854335");

    this.cidade = new Cidade();
    this.cidade.cidadeId = 2;
    this.cidade.descricao = "Cascavel";
    this.cidade.estado = this.estado;
    this.cidade.ceps.push("554723444");
    this.cidade.ceps.push("235776987");
    this.cidade.ceps.push("206040853");
    this.cidade.ceps.push("208784057");
    this.cidade.ceps.push("32588-082");

    this.estado = new Estado();
    this.estado.estadoId = 2;
    this.estado.descricao = "Rio Grande do Sul";
    this.estado.sigla = "RS";
    this.estados.push(this.estado);
    
    this.cidade = new Cidade();
    this.cidade.cidadeId = 3;
    this.cidade.descricao = "Porto Alegre";
    this.cidade.estado = this.estado;
    this.cidade.ceps.push("123123123");
    this.cidade.ceps.push("534534555");
    this.cidade.ceps.push("132377889");
    this.cidade.ceps.push("784563527");
    this.cidade.ceps.push("268854335");

    this.cidade = new Cidade();
    this.cidade.cidadeId = 4;
    this.cidade.descricao = "Lajeado";
    this.cidade.estado = this.estado;
    this.cidade.ceps.push("554723444");
    this.cidade.ceps.push("235776987");
    this.cidade.ceps.push("206040853");
    this.cidade.ceps.push("208784057");
    this.cidade.ceps.push("32588-082");
    this.cidade = new Cidade();
    this.atualizaTabela();
  }

  salvar() {
    this.cidades.push(this.cidade);
    console.log("Salvou, meu patrão...");
    console.log(this.cidades);
    this.cidade = new Cidade();
    this.atualizaTabela();
  }

  remover(posicao: number) {
    this.cidades.splice(posicao, 1);
    console.log("Removeu, meu patrão...");
    this.atualizaTabela();
  }

  atualizar() {
    
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
      data.pessoaId.toString().indexOf(filter) != -1 ||
      data.nome.toLowerCase().indexOf(filter) != -1;
  
    this.dataSource.filter = valor;
  }

  atualizaTabela() {
    this.dataSource = new MatTableDataSource<Cidade>(this.cidades);
    this.dataSource.paginator = this.paginatorCustom;
    this.dataSource.sort = this.sort;
  }

}
