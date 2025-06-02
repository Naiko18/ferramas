import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuienesomosPageRoutingModule } from './quienesomos-routing.module';

import { QuienesomosPage } from './quienesomos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuienesomosPageRoutingModule
  ],
  declarations: [QuienesomosPage]
})
export class QuienesomosPageModule {}
