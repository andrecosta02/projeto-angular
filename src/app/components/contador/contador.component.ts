
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <div>
      <button (click)="decrementar()">-</button>
      <span>{{ contador }}</span>
      <button (click)="incrementar()">+</button>
    </div>
  `,
})
export class ContadorComponent {
  @Input() contador: number = 0;
  @Output() contadorAtualizado: EventEmitter<number> = new EventEmitter<number>();

  incrementar() {
    this.contador++;
    this.emitirEvento();
  }

  decrementar() {
    if (this.contador > 0) {
      this.contador--;
      this.emitirEvento();
    }
  }

  private emitirEvento() {
    this.contadorAtualizado.emit(this.contador);
  }
}
