import { Component, OnInit, ViewChild } from '@angular/core';
import { Estado } from '../../models/estado';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  displayedColumns: string[] = ['estadoId', 'sigla', 'descricao'];

  public estado: Estado = new Estado();
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

  setExpandido() {
    this.isExpandido = 1;
  }

  salvar() {
    this.estados.push(this.estado);
    console.log("Salvou, meu patrão...");
    console.log(this.estados);
    this.estado = new Estado();
    this.atualizaTabela();
  }

  remover(posicao: number) {
    this.estados.splice(posicao, 1);
    console.log("Removeu, meu patrão...");
    this.atualizaTabela();
  }

  atualizar() {
    
  }

  limpar() {
    
  }

  aplicarFiltro(valor: string){
    
  }

  atualizaTabela() {
    this.dataSource = new MatTableDataSource<Estado>(this.estados);
    this.dataSource.paginator = this.paginatorCustom;
    this.dataSource.sort = this.sort;
  }

  atualizaListBox() {
    console.log("Atualizar Listbox, meu patrão");
    let id = this.estadoSelId;
    let estadoSel;
    this.estados.forEach(function (item) {
      if (item.estadoId == id) {
        estadoSel = item;
      }
    });
  }

}
