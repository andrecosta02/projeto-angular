import { Component } from '@angular/core';

interface Item {
  nome: string;
  cor: string;
  concluida: boolean;
}

@Component({
  selector: 'app-list-itens',
  templateUrl: './list-itens.component.html',
  styleUrls: ['./list-itens.component.css']
})
export class ListItensComponent {

  public tarefa = "";
  public itens: Item[] = [
    { nome: 'item 1', cor: 'branco', concluida: false },
    { nome: 'item 2', cor: 'branco', concluida: false },
    { nome: 'item 3', cor: 'branco', concluida: false },
    { nome: 'item 4', cor: 'branco', concluida: false }
  ];

  addTarefa() {
    if (this.tarefa.trim() !== '') {
      const novaTarefa: Item = { nome: this.tarefa, cor: 'branco', concluida: false };
      this.itens.push(novaTarefa);
      this.tarefa = "";
    }
  }

  removeTarefa(item: Item) {
    this.itens.splice(this.itens.indexOf(item), 1);
  }

  marcarConcluida(item: Item) {
    item.concluida = !item.concluida;
    item.cor = item.concluida ? 'amarelo' : 'branco';
  }
}
