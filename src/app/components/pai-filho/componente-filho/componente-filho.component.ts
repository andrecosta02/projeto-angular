// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-componente-filho',
//   templateUrl: './componente-filho.component.html',
//   styleUrl: './componente-filho.component.css'
// })
// export class ComponenteFilhoComponent {

// }


import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.css']
})
export class ComponenteFilhoComponent {
  @Input() itens: string[] = [];
}