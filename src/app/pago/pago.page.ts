import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {

  carrito: any[] = [];
  metodoPago: string = '';
  tipoEntrega: string = '';
  direccion = {
    direccion: '',
    comuna: '',
    ciudad: '',
    referencia: ''
  };

  constructor(private route: Router, private alertController: AlertController) {}

  ngOnInit() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      this.carrito = JSON.parse(carritoGuardado);
    }
  }

  getTotal(): number {
    return this.carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
  }

  async confirmarPago() {
    if (!this.metodoPago || !this.tipoEntrega) {
      const alerta = await this.alertController.create({
        header: 'Falta Información',
        message: 'Por favor, selecciona método de pago y tipo de entrega.',
        buttons: ['OK']
      });
      await alerta.present();
      return;
    }

    const alertaConfirmacion = await this.alertController.create({
      header: 'Pago Confirmado',
      message: '¡Pago confirmado! Gracias por tu compra.',
      buttons: [{
        text: 'OK',
        handler: () => {
          // Vaciar carrito y redirigir
          this.carrito = [];
          localStorage.removeItem('carrito');
          this.route.navigate(['/home']);
        }
      }]
    });

    await alertaConfirmacion.present();
  }

}