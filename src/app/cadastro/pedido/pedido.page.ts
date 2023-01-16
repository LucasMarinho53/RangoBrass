import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from 'src/app/model/pedido.model';
import { FirebasepedidoService } from 'src/app/services/firebasepedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {

  pedidoForm!: FormGroup;
  pedido!:Pedido;

  constructor(private formBuilder: FormBuilder,
    private router: Router, private route: ActivatedRoute,
    private firebasepedidoService: FirebasepedidoService) { }

  ngOnInit() {
    this.pedidoForm = this.formBuilder.group({
      nomeuser: ['',[Validators.required]],
      nome: ['',[Validators.required]],
      categoria: ['',[Validators.required]],
      });
  }

  createPedido(values: any){
    let newPedido:Pedido = {...values};
    this.firebasepedidoService.savepedido(newPedido);
    this.router.navigateByUrl('home');
  }

  loadForm(){
    this.pedidoForm.patchValue({
      nomeuser: this.pedido.nome,
      nome: this.pedido.nome,
      categoria: this.pedido.categoria
    });
  }

}
