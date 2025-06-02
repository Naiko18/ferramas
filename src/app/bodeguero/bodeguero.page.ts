import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-bodeguero',
  templateUrl: './bodeguero.page.html',
  styleUrls: ['./bodeguero.page.scss'],
})
export class BodegueroPage implements OnInit {

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

  ordenesPendientes = [
  { id: 1, cliente: 'Juan Pérez', estado: 'Pendiente' },
  { id: 2, cliente: 'Ana Gómez', estado: 'Pendiente' },
];

productos = [
  { nombre: 'Producto A', cantidad: 10, estado: 'Disponible' },
  { nombre: 'Producto B', cantidad: 5, estado: 'Reservado' },
];

entregasPendientes = [
  { id: 1, cliente: 'Juan Pérez', estado: 'Preparado' },
];

prepararProducto(orden: any) {
  // Cambiar estado del pedido a 'Preparado'
  orden.estado = 'Preparado';

  // Simular que se mueve a entregas pendientes
  const index = this.ordenesPendientes.findIndex(o => o.id === orden.id);
  if (index !== -1) {
    this.entregasPendientes.push(orden);
    this.ordenesPendientes.splice(index, 1);
  }
}

entregarProducto(entrega: any) {
  // Cambiar estado del pedido a 'Entregado'
  entrega.estado = 'Entregado';

  // Removerlo de entregas pendientes
  const index = this.entregasPendientes.findIndex(e => e.id === entrega.id);
  if (index !== -1) {
    this.entregasPendientes.splice(index, 1);
  }

  // Aquí podrías registrar la entrega con un servicio a la API si existiera
}

}
