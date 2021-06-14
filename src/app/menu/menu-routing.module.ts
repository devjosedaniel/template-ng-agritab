import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { InicioComponent } from '../pages/inicio/inicio.component';
import { Pagina1Component } from '../pages/pagina1/pagina1.component';
import { Pagina2Component } from '../pages/pagina2/pagina2.component';

const routes: Routes = [
  {
    path: '', component: MenuComponent, children: [
      { path: '', component: InicioComponent },
      { path: 'inicio', redirectTo: '' },
      { path: 'pagina1', component: Pagina1Component },
      { path: 'pagina2', component: Pagina2Component },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
