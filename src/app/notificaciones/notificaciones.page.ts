import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  usuario: any;
  
    constructor(private route: Router, 
          private service: ServiceService, 
          private alertController: AlertController) { }
  
    ngOnInit() {
  
      this.usuario = JSON.parse(localStorage.getItem("usuario") || '');
    }
  
    async cerrarSesion() {
          
      localStorage.removeItem('usuario');
      this.route.navigate(['/login']);
  
    }
  
    IrVentas(){
  
      this.route.navigate(['/vendedor']);
  
    }
  
    IrBodeguero(){
  
      this.route.navigate(['/bodeguero']);
  
    }
  
    IrContador(){
  
      this.route.navigate(['/contador']);
  
    }
  
    IrAdministrador(){
  
      this.route.navigate(['/administrador']);
  
    }
  
    IrInicioSesion(){
  
      this.route.navigate(['/login']);
  
    }
  
    IrNotificaciones(){
  
      this.route.navigate(['/notificaciones']);
  
    }
  
  
    IrSoporte(){
  
      this.route.navigate(['/soporte']);
  
    }
  
    IrQuieneSomos(){
  
      this.route.navigate(['/quienesomos']);
  
    }
  
    IrContacto(){
  
      this.route.navigate(['/contacto']);
  
    }
  
  }
  