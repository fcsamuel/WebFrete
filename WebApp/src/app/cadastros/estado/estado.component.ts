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

  displayedColumns: string[] = ['estadoId', 'sigla', 'descricao', 'editColumn'];

  public estado: Estado = new Estado();
  public estadoAtualilzar: Estado = new Estado();
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
    if(this.estadoAtualilzar == null) {
      this.estados.push(this.estado);
      console.log("Salvou, meu patrão...");
    }else {
      this.estados[this.estados.indexOf(this.estadoAtualilzar)] = this.estado;
      console.log("Atualizou, meu patrão...");
    }
    console.log(this.estados);
    this.estado = new Estado();
    this.atualizaTabela();
  }

  remover(estadoRemover: Estado) {
    this.estados.splice(this.estados.indexOf(estadoRemover), 1);
    console.log("Removeu, meu patrão...");
    this.atualizaTabela();
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
