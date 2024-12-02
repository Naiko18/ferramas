import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciotallerPage } from './iniciotaller.page';

const routes: Routes = [
  {
    path: '',
    component: IniciotallerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciotallerPageRoutingModule {}
