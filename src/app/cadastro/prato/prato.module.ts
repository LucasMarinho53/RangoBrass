import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PratoPageRoutingModule } from './prato-routing.module';

import { PratoPage } from './prato.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PratoPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [PratoPage]
})
export class PratoPageModule {}
