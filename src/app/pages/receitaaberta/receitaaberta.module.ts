import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceitaabertaPageRoutingModule } from './receitaaberta-routing.module';

import { ReceitaabertaPage } from './receitaaberta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceitaabertaPageRoutingModule
  ],
  declarations: [ReceitaabertaPage]
})
export class ReceitaabertaPageModule {}
