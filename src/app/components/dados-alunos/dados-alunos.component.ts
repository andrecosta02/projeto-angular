// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dados-alunos',
//   templateUrl: './dados-alunos.component.html',
//   styleUrl: './dados-alunos.component.css'
// })
// export class DadosAlunosComponent {

// }


// Seu componente
import { Component, OnInit } from '@angular/core';
// import { AlunosService } from './alunos.service';
import { AlunosService } from '../../service/dados-alunos.service';

@Component({
  selector: 'app-dados-alunos',
  template: `
    <h2>Dados dos Alunos</h2>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Matrícula</th>
          <th>Curso</th>
          <th>Média Global</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let aluno of alunos">
          <td>{{ aluno.nome }}</td>
          <td>{{ aluno.matricula }}</td>
          <td>{{ aluno.curso }}</td>
          <td>{{ calcularMediaGlobal(aluno.rendimentoEscolar) }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styleUrls: ['./dados-alunos.component.css']
})
export class DadosAlunosComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(private alunosService: AlunosService) {}

  ngOnInit() {
    this.obterDadosAlunos();
  }

  obterDadosAlunos() {
    this.alunosService.obterAlunos().subscribe(data => {
      this.alunos = data;
    });
  }

  calcularMediaGlobal(rendimentoEscolar: { [disciplina: string]: number }): string {
    const disciplinas = Object.keys(rendimentoEscolar);
    const notas = disciplinas.map(disciplina => rendimentoEscolar[disciplina]);
    const media = notas.reduce((total, nota) => total + nota, 0) / disciplinas.length;
    return media.toFixed(1);
  }
}
