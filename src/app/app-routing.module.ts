import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrousuario',
    loadChildren: () => import('./registrousuario/registrousuario.module').then( m => m.RegistrousuarioPageModule)
  },
  {
    path: 'registroexitoso',
    loadChildren: () => import('./registroexitoso/registroexitoso.module').then( m => m.RegistroexitosoPageModule)
  },
  {
    path: 'bibliotecausuario',
    loadChildren: () => import('./bibliotecausuario/bibliotecausuario.module').then( m => m.BibliotecausuarioPageModule)
  },
  {
    path: 'visualizarlibro',
    loadChildren: () => import('./visualizarlibro/visualizarlibro.module').then( m => m.VisualizarlibroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
