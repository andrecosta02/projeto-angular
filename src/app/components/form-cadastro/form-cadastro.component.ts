// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-form-cadastro',
//   templateUrl: './form-cadastro.component.html',
//   styleUrl: './form-cadastro.component.css'
// })
// export class FormCadastroComponent {

// }


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-form-cadastro',
//   templateUrl: './form-cadastro.component.html',
//   styleUrls: ['./form-cadastro.component.css']
// })
// export class FormCadastroComponent {
//   nome: string = '';
//   email: string = '';
//   senha: string = '';

//   onSubmit() {
//     // Aqui você pode adicionar lógica para lidar com os dados do formulário
//     console.log('Formulário enviado:', this.nome, this.email, this.senha);
//   }
// }

// form-cadastro.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  cadastroRealizado: boolean = false;
  mostrarMensagemErro: boolean = false;

  onSubmit() {
    // Verifica se todos os campos estão preenchidos
    if (this.nome && this.email && this.senha) {
      this.cadastroRealizado = true;
      this.mostrarMensagemErro = false;
    } else {
      this.cadastroRealizado = false;
      this.mostrarMensagemErro = true;
    }
  }
}
