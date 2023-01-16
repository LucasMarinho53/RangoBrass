import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalclienteComponent } from 'src/app/modalcliente/modalcliente.component';
import { Cliente } from 'src/app/model/cliente.model';
import { FirebaseclienteService } from 'src/app/services/firebasecliente.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {

  clientes!: Cliente[];

  constructor(private modalCtrl: ModalController,
    private firebaseclienteService: FirebaseclienteService) { }

  ngOnInit() {
  }

  public ionViewWillEnter(){
    this.firebaseclienteService.listcliente().subscribe({
      next: (result) => {this.clientes = result},
      error: (err) => {console.error(err)}
    })
  }

  listaCliente() {
    this.firebaseclienteService.listcliente().subscribe({
      next:(result) => this.clientes = result,
      error:(err) => console.error(err),
    });
  }
  async OpenModal(id:string) {
    const cliente = this.clientes.find(cliente => cliente.id === id);
    console.log(cliente)
    const modal = await this.modalCtrl.create({
      component: ModalclienteComponent,
      componentProps: {
        'cliente': cliente
      }
    });
    return await modal.present();
  }

}
