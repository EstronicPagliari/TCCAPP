import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FornoPageRoutingModule } from './forno-routing.module';

import { FornoPage } from './forno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FornoPageRoutingModule
  ],
  declarations: [FornoPage]
})
export class FornoPageModule {}
