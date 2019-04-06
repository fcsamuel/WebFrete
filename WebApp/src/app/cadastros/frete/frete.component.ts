import { Component, OnInit, ViewChild } from '@angular/core';
import { EstadoComponent } from '../estado/estado.component';
import { CidadeComponent } from '../cidade/cidade.component';
import { TabelafreteComponent } from '../tabelafrete/tabelafrete.component';
import { Frete } from '../../models/frete';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

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
  public freteAtualizar: Frete = new Frete();
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
      this.fretes[this.fretes.indexOf(this.freteAtualizar)] = this.frete;
      console.log("Atualizou, meu patrão...");
    }
    console.log(this.fretes);
    this.frete = new Frete();
    this.atualizaTabela();
  }

  remover(freteRemover: Frete) {
    this.fretes.splice(this.fretes.indexOf(freteRemover), 1);
    console.log("Removeu, meu patrão...");
    console.log(this.fretes);
    this.atualizaTabela();
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
    
  }

  atualizaTabela() {
    this.dataSource = new MatTableDataSource<Frete>(this.fretes);
    this.dataSource.paginator = this.paginatorCustom;
    this.dataSource.sort = this.sort;
  }
  
}
