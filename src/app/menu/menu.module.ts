import { NgModule } from '@angular/core';

import { MenuRoutingModule } from './menu-routing.module';

import { MenuComponent } from './menu.component';
import { ComponentsModule } from '../components/components.module';
import { InicioComponent } from '../pages/inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { Pagina1Component } from '../pages/pagina1/pagina1.component';
import { Pagina2Component } from '../pages/pagina2/pagina2.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [MenuRoutingModule,
    CommonModule,
    FormsModule,
    ComponentsModule],
  declarations: [MenuComponent, InicioComponent, Pagina1Component, Pagina2Component],
  exports: [MenuComponent]
})
export class MenuModule { }
