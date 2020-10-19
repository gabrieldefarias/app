import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatrimonioPage } from './patrimonio.page';

const routes: Routes = [
  {
    path: '',
    component: PatrimonioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatrimonioPageRoutingModule {}
