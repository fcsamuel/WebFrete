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

  displayedColumns: string[] = ['freteId', 'tabelaFreteComponent.tabelaFrete.origem', 'tabelaFreteComponent.tabelaFrete.destino', 'peso', 'valorTotal'];

  public estadoComponent: EstadoComponent = new EstadoComponent;
  public cidadeComponent: CidadeComponent = new CidadeComponent;
  public tabelaFreteComponent: TabelafreteComponent = new TabelafreteComponent;
  
  public frete: Frete;
  public fretes: Array<Frete>;
  public isExpandido: number;
  public dataSource: any;

  @ViewChild(MatPaginator) paginatorCustom: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.frete = new Frete();
    this.fretes = new Array<Frete>();
    this.isExpandido = 0;
  }

  setExpandido() {
    this.isExpandido = 1;
  }

  salvar() {
    
  }

  remover() {

  }

  atualizar() {

  }

  limpar() {
    
  }

  aplicarFiltro(valor: string){
    
  }

  atualizaTabela() {
    this.dataSource = new MatTableDataSource<Frete>(this.fretes);
    this.dataSource.paginator = this.paginatorCustom;
    this.dataSource.sort = this.sort;
  }
  
}
