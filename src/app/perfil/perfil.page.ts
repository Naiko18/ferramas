import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: any;

  constructor(private usuarioService: ServiceService, private route: Router) { }

  ngOnInit() {

    this.usuario = JSON.parse(localStorage.getItem("usuario") || '');
  
  }

  irConfiguracion() {
    
  }
  
  verPoliticas() {
    
  }
  
  cerrarSesion() {
    
    localStorage.removeItem('usuario');
    this.route.navigate(['/login']);
  
  }

  irTerminos(){

    this.route.navigate(['/home/terminos']);
  }

  irMetodoPago(){

    this.route.navigate(['/home/metodopago'])

  }

  irListadoViaje(){

    this.route.navigate(['/home/listadoviaje'])

  }

  irEditarPerfil(){
    this.route.navigate(['/home/editarperfil'])
  }



}
