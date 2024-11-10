import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-visualizarlibro',
  templateUrl: './visualizarlibro.page.html',
  styleUrls: ['./visualizarlibro.page.scss'],
})
export class VisualizarlibroPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  ir_seleccion() {
    this.navCtrl.navigateForward('/bibliotecausuario');
}

}
