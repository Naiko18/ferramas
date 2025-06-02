import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-quienesomos',
  templateUrl: './quienesomos.page.html',
  styleUrls: ['./quienesomos.page.scss'],
})
export class QuienesomosPage implements OnInit {

  equipo = [
    {
      nombre: 'Nicolás Arriagada',
      cargo: 'Gerente General',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFCVhzJM6xxl-_Xv99oUbisA7il7VX5j_5Mw&s'
    },
    {
      nombre: 'Benjamín Contreras',
      cargo: 'Jefa de Ventas',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWOXYNMerQgw3eNixRy8LyuSfVNSq6Bhpsw&s'
    },
    {
      nombre: 'Benjamín Alamana',
      cargo: 'Responsable de Logística',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZbJLJDNpGExD-tS7y20xEHi1EQeA1ZZAY-Q&s'
    }
  ];

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
      
  
