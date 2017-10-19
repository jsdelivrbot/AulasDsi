import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  public palavra: string;
  public numero = 1;
  public items = [];

  constructor() { }

  public ngOnInit() {
    this.palavra = 'minha palavra';
  }

  public minhaFuncao(): void {
    this.palavra = 'mudou!';
    this.items.push(this.numero);
    this.numero++;
  }



}
