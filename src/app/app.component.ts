import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Cadastrar Cliente', url: 'cliente', icon: 'finger-print' },
    { title: 'Cadastrar Pedido', url: 'pedido', icon: 'pizza' },
    { title: 'Cadastrar Prato', url: 'prato', icon: 'ice-cream' },
    { title: 'Login', url: 'login', icon: 'person' },
    { title: 'Listagem Clientes', url: 'listagem', icon: 'people' },
  ];
  constructor() {}
}
