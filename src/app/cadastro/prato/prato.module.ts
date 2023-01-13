import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PratoPageRoutingModule } from './prato-routing.module';

import { PratoPage } from './prato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PratoPageRoutingModule
  ],
  declarations: [PratoPage]
})
export class PratoPageModule {}
