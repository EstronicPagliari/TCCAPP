import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitaabertaPage } from './receitaaberta.page';

const routes: Routes = [
  {
    path: '',
    component: ReceitaabertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceitaabertaPageRoutingModule {}
