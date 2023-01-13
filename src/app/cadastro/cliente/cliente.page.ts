import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente.model';
import { CorreiosService } from 'src/app/services/correios.service';
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
    private correiosService: CorreiosService,
    private firebaseclienteService: FirebaseclienteService) { }

  ngOnInit(): void{
    this.clienteForm = this.formBuilder.group({
      nome: ['',[Validators.required]],
      email: ['',[Validators.required]],
      senha: ['',[Validators.required]],
      senhaconfirm: ['',[Validators.required, this.conferirSenha]],
      CPF: ['',[Validators.required]],
      logradouro: ['',[Validators.required]],
      numero: ['',[Validators.required]],
      bairro: ['',[Validators.required]],
      localidade: ['',[Validators.required]],
      cep: ['',[Validators.required]],
      });
  }

  createCliente(values: any){
    let newCliente:Cliente = {...values};
    this.firebaseclienteService.savecliente(newCliente);
    this.createForm.reset();
    this.router.navigateByUrl('home');
  }

  conferirSenha(control: FormControl){
    const senha = control.root.get('senha');
    return senha && control.value !== senha.value ? {
      conferir: true
    } : null;
  }

  loadForm(){
    this.clienteForm.patchValue({
      nome: this.cliente.nome,
      email: this.cliente.email,
      senha: this.cliente.senha,
      senhaconfirm: this.cliente.senhacomfirm,
      CPF: this.cliente.CPF,
      logradouro: this.cliente.logradouro,
      numero: this.cliente.numero,
      bairro: this.cliente.bairro,
      cidade: this.cliente.localidade,
      cep: this.cliente.cep
    });
  }

  loadEndereco() {
    const cep:string = this.clienteForm.get('cep')?.value;
    this.correiosService.getEndereco(cep).subscribe({
      next: (result:Cliente) => {
        this.clienteForm.patchValue({
          logradouro: result.logradouro,
          bairro: result.bairro,
          localidade: result.localidade,
          cep: result.cep
        });
      },
      error: (err) => {
        console.error(err);
      }
  });
  }
}
