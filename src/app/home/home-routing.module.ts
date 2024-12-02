import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'inicio-app',
        loadChildren: () => import('../iniciotaller/iniciotaller.module').then( m => m.IniciotallerPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'mantenedor',
        loadChildren: () => import('../mantenedor/mantenedor.module').then( m => m.MantenedorPageModule)
      },
      
      {
        path: '',  
        redirectTo: 'iniciotaller',
        pathMatch: 'full' 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
