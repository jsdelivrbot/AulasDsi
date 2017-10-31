import { RouterModule, Routes } from '@angular/router';

import { OpcaoAComponent } from './opcao-a/opcao-a.component';
import { OpcaoBComponent } from './opcao-b/opcao-b.component';
import { ErroComponent } from './erro/erro.component';

export const appRoutes: Routes = [
  { path: 'opcaoa', component: OpcaoAComponent },
  { path: 'opcaob/:id', component: OpcaoBComponent },
  { path: 'opcaob', component: OpcaoBComponent },
  { path: '**', component: ErroComponent }
];
