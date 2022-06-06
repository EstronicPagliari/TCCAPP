import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricoprocessoPage } from './historicoprocesso.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoprocessoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoprocessoPageRoutingModule {}
