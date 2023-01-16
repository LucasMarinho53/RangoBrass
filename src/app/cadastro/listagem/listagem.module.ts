import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemPageRoutingModule } from './listagem-routing.module';

import { ListagemPage } from './listagem.page';
import { HttpClientModule } from '@angular/common/http';
import { ModalclienteModule } from 'src/app/modalcliente/modalcliente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemPageRoutingModule,
    HttpClientModule,
    ModalclienteModule
  ],
  declarations: [ListagemPage]
})
export class ListagemPageModule {}
