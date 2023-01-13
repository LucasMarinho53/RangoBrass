import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PratoPage } from './prato.page';

const routes: Routes = [
  {
    path: '',
    component: PratoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PratoPageRoutingModule {}
