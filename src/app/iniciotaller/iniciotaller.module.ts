import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciotallerPageRoutingModule } from './iniciotaller-routing.module';

import { IniciotallerPage } from './iniciotaller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciotallerPageRoutingModule
  ],
  declarations: [IniciotallerPage]
})
export class IniciotallerPageModule {}
