import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-iniciotaller',
  templateUrl: './iniciotaller.page.html',
  styleUrls: ['./iniciotaller.page.scss'],
})
export class IniciotallerPage implements OnInit {

  talleresFisicos = [
    { nombre: 'Yoga', tipo: 'Presencial', color: '#FFD700' },
    { nombre: 'Gimnasia suave o adaptada', tipo: 'Presencial', color: '#FF6347' },
    { nombre: 'Zumba', tipo: 'Virtual', color: '#FF4500' },
    { nombre: 'Caminatas grupales', tipo: 'Presencial', color: '#FF69B4' },
  ];

  talleresCognitivos = [
    { nombre: 'Juegos de mesa y de estrategia', tipo: 'Presencial', color: '#4682B4' },
    { nombre: 'Taller de Inglés', tipo: 'Virtual', color: '#5F9EA0' },
    { nombre: 'Escritura', tipo: 'Híbrido', color: '#00CED1' },
    { nombre: 'Ajedrez para principiantes', tipo: 'Presencial', color: '#1E90FF' }
  ];

  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  async tomarTaller(nombreTaller: string) {
    const alert = await this.alertController.create({
      header: '¡Taller tomado con éxito! 🎉',
      message: `Has tomado el taller: <strong>${nombreTaller}</strong>. ¡Te esperamos!`,
      buttons: ['OK']
    });

    await alert.present();
  }
}