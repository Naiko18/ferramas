import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombre_user: string = '';
  contra_user: string = '';
  alertButtons = ['Aceptar'];


  constructor(
    private route: Router, 
    private service: ServiceService, 
    private alertController: AlertController
  ) {}

  ngOnInit() {
  }

  ingresarLogin() {
    
    const usuarioValido = this.service.validarUsuario(this.nombre_user, this.contra_user);

    if (usuarioValido) {
      
      localStorage.setItem('usuario', JSON.stringify(usuarioValido.value));
    
      this.route.navigate(['/home']);
    } else {
      
      this.presentAlert('Usuario y/o Contraseña incorrectos');
    }
  }

  private async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: this.alertButtons
    });

    await alert.present();
  }

}
