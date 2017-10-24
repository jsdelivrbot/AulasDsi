import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Aluno } from './aluno';

@Injectable()
export class AlunoService {

  private alunosUrl = 'http://localhost:4200/api/alunos';

  constructor(private http: Http) { }

  public addAluno(body: Object): Observable<Aluno[]> {

    const bodyString = JSON.stringify(body);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.alunosUrl, body, options)
      .map((res: Response) => res.json());
  }

  public updateAluno(body: Object): Observable<Aluno[]> {

    const bodyString = JSON.stringify(body);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.alunosUrl}/${body['id']}`, body, options)
      .map((res: Response) => res.json());

  }

  public removeAluno(id: number): Observable<Aluno[]> {
    return this.http.delete(`${this.alunosUrl}/${id}`)
      .map((res: Response) => res.json());
  }

  public loadAlunos(): Observable<Aluno[]> {
    return this.http.get(`${this.alunosUrl}`)
      .map((res: Response) => res.json());
  }

}
