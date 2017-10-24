import { Component, OnInit } from '@angular/core';
import { AlunoService } from './aluno.service';
import { Aluno } from './aluno';

@Component({
  selector: 'app-aluno-component',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  public alunos: Aluno[] = [];
  public nome = '';

  constructor(private alunoService: AlunoService) { }

  public ngOnInit() {
    this.carregaTodos();
  }

  public salvarAluno(): void {
    console.log('oi');

    const aluno = new Aluno();
    aluno.nome = this.nome;

    this.alunoService.addAluno(aluno)
      .subscribe(res => {
        console.log(res);
        this.carregaTodos();
      },
      err => {
        console.log(err);
      });

  }

  public apagarAluno(id: number): void {
    this.alunoService.removeAluno(id)
      .subscribe(res => {
        console.log(res);
        this.carregaTodos();
      },
      err => {
        console.log(err);
      });
  }

  public carregaTodos(): void {
    this.alunoService.loadAlunos()
      .subscribe(res => {
        this.alunos = res;
        console.log('foi');
      },
      err => {
        console.log(err);
      });
  }

}
