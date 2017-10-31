import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Modulos da aplicacao
import { AlunoModule } from './modulos/aluno/aluno.module';

import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { ErroComponent } from './erro/erro.component';
import { OpcaoAComponent } from './opcao-a/opcao-a.component';
import { OpcaoBComponent } from './opcao-b/opcao-b.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ErroComponent,
    OpcaoAComponent,
    OpcaoBComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),

    // Depois de declarar e criar, importar.
    AlunoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
