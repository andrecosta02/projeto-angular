// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-area-logada',
//   templateUrl: './area-logada.component.html',
//   styleUrl: './area-logada.component.css'
// })
// export class AreaLogadaComponent {

// }

// area-logada.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-area-logada',
  template: `
    <h2>Área Logada</h2>
    <p>Bem-vindo! E-mail: {{ email }}</p>
  `,
  styleUrls: ['./area-logada.component.css']
})

export class AreaLogadaComponent {
  @Input() email: string = '';
}
