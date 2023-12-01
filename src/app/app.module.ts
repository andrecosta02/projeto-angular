import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { ControleAcessoComponent } from './components/controle-acesso/controle-acesso.component';
import { ComponentePaiComponent } from './components/pai-filho/componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './components/pai-filho/componente-filho/componente-filho.component';
import { FormLoginComponent } from './components/login/form-login/form-login.component';
import { AreaLogadaComponent } from './components/login/area-logada/area-logada.component';
// import { DadosAlunosComponent } from './components/dados-alunos/dados-alunos.component';
// import { DadosAlunosComponent } from './components/dados-alunos/dados-alunos.component';
import { ListItensComponent } from './components/list-itens/list-itens.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    FormCadastroComponent,
    ControleAcessoComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    FormLoginComponent,
    AreaLogadaComponent,
    // DadosAlunosComponent,
    ListItensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
