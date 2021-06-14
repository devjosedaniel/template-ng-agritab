import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  nombreSistema = 'Nombre sistema';
  anio = new Date().getFullYear();
  isCollapsed = true;
  theme = true;
  constructor() { }

  ngOnInit(): void {
  }

}
