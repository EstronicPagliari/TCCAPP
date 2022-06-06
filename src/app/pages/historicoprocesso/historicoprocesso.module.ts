import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoprocessoPageRoutingModule } from './historicoprocesso-routing.module';

import { HistoricoprocessoPage } from './historicoprocesso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoprocessoPageRoutingModule
  ],
  declarations: [HistoricoprocessoPage]
})
export class HistoricoprocessoPageModule {}
