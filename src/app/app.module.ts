import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DataHoraComponent } from './data-hora/data-hora.component';
import '@angular/common/locales/global/pt';
import { LivrosComponent } from './livros/livros.component';
import { HttpClientModule } from '@angular/common/http';
import { LivrosCadastroComponent } from './livros-cadastro/livros-cadastro.component';
import { Route, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PacoteComponent } from './pacote/pacote.component';
import { PacoteCadastroComponent } from './pacote-cadastro/pacote-cadastro.component';
import { PassagemComponent } from './passagem/passagem.component';
import { PassagemCadastroComponent } from './passagem-cadastro/passagem-cadastro.component';

const routes: Route[] = [
  {
    path: 'listagem',
    component: ClienteComponent
  },
  {
    path: 'listagemPacote',
    component: PacoteComponent
  },
  {
    path: 'listagemPassagem',
    component: PassagemComponent
  },
  {
    path: 'cadastro',
    component: ClienteCadastroComponent
  },
  {
    path: 'cadastroPacote',
    component: PacoteCadastroComponent
  },
  {
    path: 'cadastroPassagem',
    component: PassagemCadastroComponent
  },
  {
    path: 'edicao/:id',
    component: ClienteCadastroComponent
  },
  {
    path: 'edicaoPacote/:id',
    component: PacoteCadastroComponent
  },
  {
    path: 'edicaoPassagem/:id',
    component: PassagemCadastroComponent
  },
  {
    path: '**',
    redirectTo: '/listagem',
    pathMatch: 'full'
  },

]


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DataHoraComponent,
    LivrosComponent,
    LivrosCadastroComponent,
    ClienteCadastroComponent,
    ClienteComponent,
    PacoteComponent,
    PacoteCadastroComponent,
    PassagemComponent,
    PassagemCadastroComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule { }
