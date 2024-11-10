import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  constructor(public navCtrl: NavController) {
  }

  ir_registro() {
    this.navCtrl.navigateForward('/registrousuario');
  }

  ir_lectura(){
    this.navCtrl.navigateForward('/bibliotecausuario');
  }

}
