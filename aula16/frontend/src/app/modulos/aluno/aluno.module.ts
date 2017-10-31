import { NgModule } from '@angular/core';
import { AlunoComponent } from './aluno.component';
import { AlunoService } from './aluno.service';

@NgModule({
  imports: [],
  declarations: [AlunoComponent],
  providers: [AlunoService]
})
export class AlunoModule { }
