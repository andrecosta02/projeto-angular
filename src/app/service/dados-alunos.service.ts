// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DadosAlunosService {

//   constructor() { }
// }

// Seu serviço
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Aluno {
  matricula: number;
  nome: string;
  idade: number;
  curso: string;
  rendimentoEscolar: { [disciplina: string]: number };
}

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  private apiUrl = 'http://localhost:3001/alunos';

  constructor(private http: HttpClient) {}

  obterAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.apiUrl);
  }
}
