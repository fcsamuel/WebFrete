import { Component, OnInit } from '@angular/core';
import { TabelaFrete } from '../../models/tabelaFrete';
@Component({
  selector: 'app-tabelafrete',
  templateUrl: './tabelafrete.component.html',
  styleUrls: ['./tabelafrete.component.css']
})
export class TabelafreteComponent implements OnInit {

  public tabelasFretes: Array<TabelaFrete>;

  constructor() { }

  ngOnInit() {
    this.tabelasFretes = new Array<TabelaFrete>();
  }

  salvar() {

  }

  remover() {

  }

  atualizar() {
    
  }

}
