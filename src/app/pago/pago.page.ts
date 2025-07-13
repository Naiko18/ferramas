import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
declare var paypal: any;

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit, AfterViewChecked {

  carrito: any[] = [];
  metodoPago: string = '';
  tipoEntrega: string = '';
  direccion = {
    direccion: '',
    comuna: '',
    ciudad: '',
    referencia: ''
  };
  paypalRendered: boolean = false;

  constructor(private route: Router, private alertController: AlertController) {}

  ngOnInit() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      this.carrito = JSON.parse(carritoGuardado);
    }
  }

  ngAfterViewChecked() {
    if (this.metodoPago === 'paypal' && !this.paypalRendered) {
      this.renderPayPalButton();
      this.paypalRendered = true;
    }
  }

  renderPayPalButton() {
  const total = this.getTotal();
  
  paypal.Buttons({
    createOrder: (data: any, actions: any) => {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: total.toString() // Total en CLP
          }
        }]
      });
    },
    onApprove: (data: any, actions: any) => {
      return actions.order.capture().then((details: any) => {
        this.showSuccessAlert().then(() => {
          // Vaciar carrito y redirigir
          this.carrito = [];
          localStorage.removeItem('carrito');
          this.route.navigate(['/home']);
        });
      });
    },
    onError: (err: any) => {
      console.error(err);
      this.showErrorAlert();
    }
  }).render('#paypal-button-container');
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

  async showSuccessAlert() {
  const alert = await this.alertController.create({
    header: '¡Pago Exitoso!',
    message: 'Tu transacción ha sido procesada correctamente.',
    buttons: ['OK']
  });

  await alert.present();
}

async showErrorAlert() {
  const alert = await this.alertController.create({
    header: 'Pago Rechazado',
    message: 'Hubo un problema al procesar tu pago. Por favor, intenta nuevamente.',
    buttons: ['OK']
  });

  await alert.present();
}

getTotalUSD(): number {
  const tasaCambio = 950; // Cambia esto si deseas actualizarlo dinámicamente
  return this.getTotal() / tasaCambio;
}

}