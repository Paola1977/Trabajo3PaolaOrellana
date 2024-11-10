import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registrousuario',
  templateUrl: './registrousuario.page.html',
  styleUrls: ['./registrousuario.page.scss'],
})
export class RegistrousuarioPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  ir_registroexitoso() {
    this.navCtrl.navigateForward('/registroexitoso');
  }

  ir_inicio() {
    this.navCtrl.navigateForward('/login');
  }

}
