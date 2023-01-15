import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;
  type: boolean = true;
  cliente!:Cliente;

  constructor(private formBuilder: FormBuilder,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void{
    this.loginForm = this.formBuilder.group({
    email: ['',[Validators.required, Validators.email]],
    senha: ['',[Validators.required, Validators.pattern(/^(?=.*[@*\.])[a-zA-Z0-9@*]{6,10}$/)]]
    });
  }

  loadForm(){
    this.loginForm.patchValue({
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

  changeType(){
    this.type = !this.type;
  }

}
