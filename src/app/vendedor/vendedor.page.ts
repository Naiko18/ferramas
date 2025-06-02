import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.page.html',
  styleUrls: ['./vendedor.page.scss'],
})
export class VendedorPage implements OnInit {

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
        this.route.navigate(['/home']);
      }

  prepararProducto(producto: any) {
    producto.estado = 'Preparado';
    // Lógica adicional si es necesario
  }

  confirmarTransferencia(transaccion: any) {
    transaccion.confirmada = true;
    // Aquí podrías llamar a una API o servicio
  }

  generarBoleta(venta: any) {
    const boleta = `
      === BOLETA DE VENTA ===
      Cliente: ${venta.cliente}
      Total: ${venta.total} CLP
      Fecha: ${new Date().toLocaleString()}
      -------------------------
      Gracias por su compra.
    `;

    
    console.log(boleta);
    alert(boleta);
  }

  productosPendientes = [
  { nombre: 'Producto A', cliente: 'Juan', estado: 'Pendiente' },
  { nombre: 'Producto B', cliente: 'Ana', estado: 'Pendiente' },
];

productos = [
  { nombre: 'Producto A', cantidad: 10, estado: 'Disponible' },
  { nombre: 'Producto B', cantidad: 4, estado: 'Reservado' },
];

transferencias = [
  { cliente: 'Juan', monto: 15000, confirmada: false },
  { cliente: 'Ana', monto: 20000, confirmada: true },
];

ventasConfirmadas = [
  { id: 101, cliente: 'Juan', total: 15000 },
  { id: 102, cliente: 'Ana', total: 20000 },
];
  
}
