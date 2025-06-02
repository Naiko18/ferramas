import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit {

  usuario: any;
  
    constructor(
        private route: Router, 
        private service: ServiceService,) {}
  
    ngOnInit() {
      const usuarioData = JSON.parse(localStorage.getItem('usuario') || '{}');
      this.usuario = usuarioData; 
    }
  
    async cerrarSesion() {
        
    localStorage.removeItem('usuario');
    this.route.navigate(['/login']);

  }

}
