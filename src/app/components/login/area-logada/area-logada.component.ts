import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-area-logada',
  template: `
    <h2>Área Logada</h2>
    <p>Bem-vindo!</p>
    <p>E-mail: {{ email }}</p>
  `,
  styleUrls: ['./area-logada.component.css']
})

export class AreaLogadaComponent {
  @Input() email: string = '';
}
