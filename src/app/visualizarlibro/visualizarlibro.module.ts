import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarlibroPageRoutingModule } from './visualizarlibro-routing.module';

import { VisualizarlibroPage } from './visualizarlibro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarlibroPageRoutingModule
  ],
  declarations: [VisualizarlibroPage]
})
export class VisualizarlibroPageModule {}
