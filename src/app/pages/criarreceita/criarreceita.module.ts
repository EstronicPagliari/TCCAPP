import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarreceitaPageRoutingModule } from './criarreceita-routing.module';

import { CriarreceitaPage } from './criarreceita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarreceitaPageRoutingModule
  ],
  declarations: [CriarreceitaPage]
})
export class CriarreceitaPageModule {}
