import { Component, OnInit } from '@angular/core';
import { Cidade } from '../../models/cidade';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {

  public cidadeList: Array<Cidade>

  constructor() { }

  ngOnInit() {
    this.cidadeList = new Array<Cidade>();
  }

  salvar() {

  }

  remover() {
    
  }

  atualizar() {
    
  }

}
