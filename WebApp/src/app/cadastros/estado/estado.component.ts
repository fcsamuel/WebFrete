import { Component, OnInit } from '@angular/core';
import { Estado } from '../../models/estado';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  displayedColumns: string[] = ['estadoId', 'sigla', 'descricao'];

  public estados: Array<Estado>;
  public isExpandido: number;

  constructor() { }

  ngOnInit() {
    this.estados = new Array<Estado>();
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

}
