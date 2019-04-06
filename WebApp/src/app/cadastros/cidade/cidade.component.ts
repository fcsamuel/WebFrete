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
  
  public cidade: Cidade = new Cidade();
  public cidades: Array<Cidade> = new Array<Cidade>();
  public cidadeSelec: Cidade = new Cidade();
  public estadoComponent: EstadoComponent = new EstadoComponent;
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
    this.carregaDados();
  }

  carregaCidades() {
    let cidades;
    this.estadoComponent.estados.forEach(function (estado) {
      estado.cidades.forEach(function (cidade) {
        cidades.push(cidade);
      });
    });
    this.cidades = cidades;
    console.log(this.cidades);
  }
  
  carregaDados() {
    this.estadoComponent.estado.estadoId = 1;
    this.estadoComponent.estado.descricao = "Paraná";
    this.estadoComponent.estado.sigla = "PR";
    this.estadoComponent.estados.push(this.estadoComponent.estado);

    this.cidade = new Cidade();
    this.cidade.cidadeId = 1;
    this.cidade.descricao = "Toledo";
    this.cidade.estado = this.estadoComponent.estado;
    this.cidade.ceps.push("123123123");
    this.cidade.ceps.push("534534555");
    this.cidade.ceps.push("132377889");
    this.cidade.ceps.push("784563527");
    this.cidade.ceps.push("268854335");
    this.cidades.push(this.cidade);

    this.cidade = new Cidade();
    this.cidade.cidadeId = 2;
    this.cidade.descricao = "Cascavel";
    this.cidade.estado = this.estadoComponent.estado;
    this.cidade.ceps.push("554723444");
    this.cidade.ceps.push("235776987");
    this.cidade.ceps.push("206040853");
    this.cidade.ceps.push("208784057");
    this.cidade.ceps.push("32588-082");
    this.cidades.push(this.cidade);

    this.estadoComponent.estado = new Estado();
    this.estadoComponent.estado.estadoId = 2;
    this.estadoComponent.estado.descricao = "Rio Grande do Sul";
    this.estadoComponent.estado.sigla = "RS";
    this.estadoComponent.estados.push(this.estadoComponent.estado);

    this.cidade = new Cidade();
    this.cidade.cidadeId = 3;
    this.cidade.descricao = "Porto Alegre";
    this.cidade.estado = this.estadoComponent.estado;
    this.cidade.ceps.push("123123123");
    this.cidade.ceps.push("534534555");
    this.cidade.ceps.push("132377889");
    this.cidade.ceps.push("784563527");
    this.cidade.ceps.push("268854335");
    this.cidades.push(this.cidade);

    this.cidade = new Cidade();
    this.cidade.cidadeId = 4;
    this.cidade.descricao = "Lajeado";
    this.cidade.estado = this.estadoComponent.estado;
    this.cidade.ceps.push("554723444");
    this.cidade.ceps.push("235776987");
    this.cidade.ceps.push("206040853");
    this.cidade.ceps.push("208784057");
    this.cidade.ceps.push("32588-082");
    this.cidades.push(this.cidade);
    this.cidade = new Cidade();
    this.atualizaTabela();
  }
  /*carregaDados() {
    this.estado = new Estado();
    this.estado.estadoId = 1;
    this.estado.descricao = "Paraná";
    this.estado.sigla = "PR";
    this.estadoComponent.estados.push(this.estado);

    this.cidade = new Cidade();
    this.cidade.cidadeId = 1;
    this.cidade.descricao = "Toledo";
    this.cidade.estado = this.estado;

    this.cidade = new Cidade();
    this.cidade.cidadeId = 2;
    this.cidade.descricao = "Cascavel";
    this.cidade.estado = this.estado;

    this.estado = new Estado();
    this.estado.estadoId = 2;
    this.estado.descricao = "Rio Grande do Sul";
    this.estado.sigla = "RS";
    this.estadoComponent.estados.push(this.estado);
    
    this.cidade = new Cidade();
    this.cidade.cidadeId = 3;
    this.cidade.descricao = "Porto Alegre";
    this.cidade.estado = this.estado;

    this.cidade = new Cidade();
    this.cidade.cidadeId = 4;
    this.cidade.descricao = "Lajeado";
    this.cidade.estado = this.estado;
    console.log(this.estadoComponent.estados);
  }*/

  salvar() {
    this.cidades.push(this.cidade);
    console.log("Salvou, meu patrão...");
    this.cidade = new Cidade();
    this.atualizaTabela();
    console.log(this.cidades);
  }

  remover(posicao: number) {
    this.cidades.splice(posicao-1, 1);
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
      data.cidadeId.toString().indexOf(filter) != -1 ||
      data.descricao.toLowerCase().indexOf(filter) != -1;
  
    this.dataSource.filter = valor;
  }

  atualizaTabela() {
    this.dataSource = new MatTableDataSource<Cidade>(this.cidades);
    this.dataSource.paginator = this.paginatorCustom;
    this.dataSource.sort = this.sort;
  }

}
