import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarlibroPage } from './visualizarlibro.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarlibroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarlibroPageRoutingModule {}
