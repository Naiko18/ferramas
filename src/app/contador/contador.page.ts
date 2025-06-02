import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.page.html',
  styleUrls: ['./contador.page.scss'],
})
export class ContadorPage implements OnInit {

  usuario: any;

  transferencias = [
    { cliente: 'Juan', monto: 15000, confirmada: false },
    { cliente: 'Ana', monto: 20000, confirmada: true },
  ];

  entregasPendientes = [
    { id: 1, cliente: 'Juan', producto: 'Producto A', entregado: false },
    { id: 2, cliente: 'Ana', producto: 'Producto B', entregado: false },
  ];

  reportes = [
    { id: 1, descripcion: 'Ventas mayo 2025', total: 350000 },
    { id: 2, descripcion: 'Transferencias confirmadas', total: 280000 },
  ];

  constructor(
    private route: Router,
    private service: ServiceService,
  ) { }

  ngOnInit() {
    const usuarioData = JSON.parse(localStorage.getItem('usuario') || '{}');
    this.usuario = usuarioData;
  }

  async cerrarSesion() {
        
    localStorage.removeItem('usuario');
    this.route.navigate(['/login']);

  }

  confirmarTransferencia(transaccion: any) {
    transaccion.confirmada = true;
  }

  registrarEntrega(entrega: any) {
    entrega.entregado = true;
  }

  generarReporte(reporte: any) {
    const reporteTexto = `
      === REPORTE ===
      ${reporte.descripcion}
      Total: ${reporte.total} CLP
      Fecha: ${new Date().toLocaleDateString()}
      ------------------------
    `;
    alert(reporteTexto);
    console.log(reporteTexto);
  }

}