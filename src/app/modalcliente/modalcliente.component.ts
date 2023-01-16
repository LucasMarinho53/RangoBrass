import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Cliente } from '../model/cliente.model';
import { FirebaseclienteService } from '../services/firebasecliente.service';

@Component({
  selector: 'app-modalcliente',
  templateUrl: './modalcliente.component.html',
  styleUrls: ['./modalcliente.component.scss'],
})
export class ModalclienteComponent implements OnInit {

  @Input() cliente!: Cliente;

  constructor(private modalCtrl: ModalController,
    private router: Router,
    private firebaseclienteService: FirebaseclienteService) { }

    cancel(){
      return this.modalCtrl.dismiss(null, 'cancel');
    }

  ngOnInit() {}

  edit(id:string){
    this.router.navigate(['editar', id]);
    this.modalCtrl.dismiss(null, 'cancel');
  }


  delete(id:string){
    this.firebaseclienteService.deletecliente(id);
    this.modalCtrl.dismiss(null, 'cancel');
    };


}
