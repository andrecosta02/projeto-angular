import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../../service/dados-alunos.service';

@Component({
  selector: 'app-dados-alunos',
  templateUrl: './dados-alunos.component.html',
  styleUrls: ['./dados-alunos.component.css']
})
export class DadosAlunosComponent implements OnInit {
  alunos: any[] = [];

  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.alunosService.getAlunos().subscribe(data => {
      this.alunos = data;
    });
  }

  calcularMedia(notas: { [key: string]: number }): number {
    const values = Object.values(notas);
    const soma = values.reduce((acc, val) => acc + val, 0);
    return soma / values.length;
  }
}
