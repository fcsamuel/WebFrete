import { Component, OnInit } from '@angular/core';
import { Estado } from '../../models/estado';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  public estadoList: Array<Estado>;

  constructor() { }

  ngOnInit() {
    this.estadoList = new Array<Estado>();
  }

  salvar() {
    
  }

  remover() {

  }

  atualizar() {
    
  }

}
