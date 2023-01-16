import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente.model';
import { CorreiosService } from 'src/app/services/correios.service';
import { FirebaseclienteService } from 'src/app/services/firebasecliente.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  clienteForm!: FormGroup;
  type: boolean = true;
  cliente!:Cliente;

  constructor(private formBuilder: FormBuilder,
    private router: Router, private route: ActivatedRoute,
    private correiosService: CorreiosService,
    private firebaseclienteService: FirebaseclienteService) { }

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      nome: ['',[Validators.required, Validators.pattern(/^[a-zA-ZÀ-ùÂ-û ]+$/), Validators.minLength(6), Validators.maxLength(50)]],
      email: ['',[Validators.required, Validators.email]],
      senha: ['',[Validators.required, Validators.pattern(/^(?=.*[@*\.])[a-zA-Z0-9@*]{6,10}$/)]],
      senhaconfirm: ['',[Validators.required, this.conferirSenha, Validators.pattern(/^(?=.*[@*\.])[a-zA-Z0-9@*]{6,10}$/)]],
      CPF: ['',[Validators.required, Validators.pattern(/^(\d{3}\.){2}\d{3}\-\d{2}$/)]],
      logradouro: ['',[Validators.required]],
      numero: ['',[Validators.required]],
      bairro: ['',[Validators.required]],
      localidade: ['',[Validators.required]],
      cep: ['',[Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      });

      this.route.paramMap.subscribe(params => {
        const clienteId = params.get('id')!;

        if(clienteId){
          this.firebaseclienteService.findcliente(clienteId).subscribe({
            next: (clienteDB:Cliente) => {
              this.cliente = clienteDB;
              this.loadForm();
            },
            error: (err) => console.log(err)
          });
        }
      });
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
      localidade: this.cliente.localidade,
      cep: this.cliente.cep
    });
  }

  editCliente(values: any){
    const editCliente = this.clienteForm.getRawValue() as Cliente;
    let cliente: Cliente = { ...values };
    editCliente.id = this.cliente.id;

    this.firebaseclienteService.updatecliente(editCliente);
    this.clienteForm.reset();
    this.router.navigateByUrl('listagem');
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

  changeType(){
    this.type = !this.type;
  }
}
