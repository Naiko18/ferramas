import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuienesomosPage } from './quienesomos.page';

const routes: Routes = [
  {
    path: '',
    component: QuienesomosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuienesomosPageRoutingModule {}
