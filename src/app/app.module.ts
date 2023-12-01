import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { ControleAcessoComponent } from './components/controle-acesso/controle-acesso.component';
import { ListItensComponent } from './components/list-itens/list-itens.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    FormCadastroComponent,
    ControleAcessoComponent,
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
