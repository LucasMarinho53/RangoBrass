import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente.model';
import { FirebaseclienteService } from 'src/app/services/firebasecliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  clienteForm!: FormGroup;
  @ViewChild('createForm') createForm!: FormGroupDirective;
  cliente!:Cliente;

  constructor(private formBuilder: FormBuilder,
    private router: Router, private route: ActivatedRoute,
    private firebaseclienteService: FirebaseclienteService) { }

  ngOnInit(): void{
    this.clienteForm = this.formBuilder.group({
      nome: ['',[Validators.required]],
      email: ['',[Validators.required]],
      senha: ['',[Validators.required]],
      CPF: ['',[Validators.required]],
      logradouro: ['',[Validators.required]],
      numero: ['',[Validators.required]],
      bairro: ['',[Validators.required]],
      cidade: ['',[Validators.required]],
      cep: ['',[Validators.required]],
      });
  }

  createCliente(values: any){
    let newCliente:Cliente = {...values};
    this.firebaseclienteService.savecliente(newCliente);
    this.createForm.reset();
    this.router.navigateByUrl('home');
  }

  loadForm(){
    this.clienteForm.patchValue({
      nome: this.cliente.nome,
      email: this.cliente.email,
      senha: this.cliente.senha,
      CPF: this.cliente.CPF,
      logradouro: this.cliente.logradouro,
      numero: this.cliente.numero,
      bairro: this.cliente.bairro,
      cidade: this.cliente.cidade,
      cep: this.cliente.cep
    });
  }

}
