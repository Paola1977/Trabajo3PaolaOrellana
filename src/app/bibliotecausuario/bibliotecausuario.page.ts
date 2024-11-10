import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bibliotecausuario',
  templateUrl: './bibliotecausuario.page.html',
  styleUrls: ['./bibliotecausuario.page.scss'],
})
export class BibliotecausuarioPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  ir_inicio() {
        this.navCtrl.navigateForward('/home');
  }

  ir_lectura() {
    this.navCtrl.navigateForward('/visualizarlibro');
  }
}
