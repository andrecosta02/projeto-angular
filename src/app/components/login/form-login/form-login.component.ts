import { Component } from '@angular/core';

@Component({
  selector: 'app-form-login',
  template: `
    <div *ngIf="!autenticado; else areaLogada">
      <h2>Formulário de Login</h2>
      <label for="email">E-mail:</label>
      <input type="text" id="email" [(ngModel)]="email" name="email" required>

      <label for="senha">Senha:</label>
      <input type="password" id="senha" [(ngModel)]="senha" name="senha" required>

      <button (click)="fazerLogin()">Fazer Login</button>
    </div>

    <ng-template #areaLogada>
      <app-area-logada [email]="email"></app-area-logada>
    </ng-template>
  `,
  styleUrls: ['./form-login.component.css']
})

export class FormLoginComponent {
  autenticado: boolean = false;
  email: string = '';
  senha: string = '';

  fazerLogin() {
    // Lógica de autenticação (pode ser mais elaborada em um aplicativo real)
    this.autenticado = true;
  }
}
