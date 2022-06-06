import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FornoPage } from './forno.page';

const routes: Routes = [
  {
    path: '',
    component: FornoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FornoPageRoutingModule {}
