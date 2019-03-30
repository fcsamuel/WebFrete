import { Component, OnInit } from '@angular/core';
import { Cidade } from '../../models/cidade';
import { Estado } from '../../models/estado';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {

  public cidade: Cidade;
  public cidades: Array<Cidade>;
  public cidadeSelec: Cidade = new Cidade();
  public estado: Estado;
  public ceps: Array<string>;
  public dataSource: any;
  public palavraChave: string;

  constructor() { }

  ngOnInit() {
    this.cidades = new Array<Cidade>();
  }

  carregaDados() {
    this.estado = new Estado();
    this.estado.estadoId = 1;
    this.estado.descricao = "Paraná";
    this.estado.sigla = "PR";

    this.cidade = new Cidade();
    this.cidade.cidadeId = 1;
    this.cidade.descricao = "Toledo";
    this.cidade.estado = this.estado;
    this.ceps.push("123123123");
    this.ceps.push("534534555");
    this.ceps.push("132377889");
    this.ceps.push("784563527");
    this.ceps.push("268854335");
    this.cidade.cepList

    this.cidade = new Cidade();
    this.cidade.cidadeId = 2;
    this.cidade.descricao = "Cascavel";
    this.cidade.estado = this.estado;
    this.ceps.push("554723444");
    this.ceps.push("235776987");
    this.ceps.push("206040853");
    this.ceps.push("208784057");
    this.ceps.push("32588-082");

    this.estado = new Estado();
    this.estado.estadoId = 2;
    this.estado.descricao = "Rio Grande do Sul";
    this.estado.sigla = "RS";

    this.cidade = new Cidade();
    this.cidade.cidadeId = 1;
    this.cidade.descricao = "Porto Alegre";
    this.cidade.estado = this.estado;
    this.ceps.push("123123123");
    this.ceps.push("534534555");
    this.ceps.push("132377889");
    this.ceps.push("784563527");
    this.ceps.push("268854335");

    this.cidade = new Cidade();
    this.cidade.cidadeId = 2;
    this.cidade.descricao = "Lajeado";
    this.cidade.estado = this.estado;
    this.ceps.push("554723444");
    this.ceps.push("235776987");
    this.ceps.push("206040853");
    this.ceps.push("208784057");
    this.ceps.push("32588-082");

  }

  salvarCidade() {

  }

  removerCidade() {
    
  }

  atualizarCidade() {
    
  }

}
