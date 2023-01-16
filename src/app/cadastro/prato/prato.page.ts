import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Prato } from 'src/app/model/prato.model';
import { FirebasepratoService } from 'src/app/services/firebaseprato.service';

@Component({
  selector: 'app-prato',
  templateUrl: './prato.page.html',
  styleUrls: ['./prato.page.scss'],
})
export class PratoPage implements OnInit {

  pratoForm!: FormGroup;
  prato!:Prato;

  constructor(private firebasepratoService: FirebasepratoService,
    private formBuilder: FormBuilder,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.pratoForm = this.formBuilder.group({
      nome: ['',[Validators.required]],
      descricao: ['',[Validators.required]],
      categoria: ['',[Validators.required]],
      });
  }

  createPrato(values: any){
    let newPrato:Prato = {...values};
    this.firebasepratoService.saveprato(newPrato);
    this.router.navigateByUrl('home');
  }

  loadForm(){
    this.pratoForm.patchValue({
      nome: this.prato.nome,
      descricao: this.prato.nome,
      categoria: this.prato.categoria
    });
  }

}
