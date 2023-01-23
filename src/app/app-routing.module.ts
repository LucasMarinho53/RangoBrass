import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate, } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(('login'));
const redirectLoggedInToHome = () => redirectLoggedInTo(('perfil'));

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./food/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pedido',
    loadChildren: () => import('./cadastro/pedido/pedido.module').then( m => m.PedidoPageModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./cadastro/cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'prato',
    loadChildren: () => import('./cadastro/prato/prato.module').then( m => m.PratoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./usuario/login/login.module').then( m => m.LoginPageModule), ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'listagem',
    loadChildren: () => import('./cadastro/listagem/listagem.module').then( m => m.ListagemPageModule)
  },
  {
    path: 'editar/:id',
    loadChildren: () => import('./cadastro/editar/editar.module').then( m => m.EditarPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./usuario/perfil/perfil.module').then( m => m.PerfilPageModule), ...canActivate(redirectUnauthorizedToLogin)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
