import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoService } from './aluno/aluno.service';

import { MenuComponent } from './menu/menu.component';
import { ErroComponent } from './erro/erro.component';
import { OpcaoAComponent } from './opcao-a/opcao-a.component';
import { OpcaoBComponent } from './opcao-b/opcao-b.component';

import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
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
    )
  ],
  providers: [AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
