import { Component, OnInit } from '@angular/core';
import { EstadoComponent } from '../estado/estado.component';

@Component({
  selector: 'app-frete',
  templateUrl: './frete.component.html',
  styleUrls: ['./frete.component.css']
})
export class FreteComponent implements OnInit {

  public estadoComponent: EstadoComponent = new EstadoComponent; //TESTE COMUNICACAO ENTRE COMPONENTS

  constructor() { }

  ngOnInit() {
  }

  salvarEstado() {
    //TESTE COMUNICACAO ENTRE COMPONENTS
    this.estadoComponent.salvar();
  }

}
