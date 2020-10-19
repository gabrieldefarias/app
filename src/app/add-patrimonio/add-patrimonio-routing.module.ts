import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPatrimonioPage } from './add-patrimonio.page';

const routes: Routes = [
  {
    path: '',
    component: AddPatrimonioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPatrimonioPageRoutingModule {}
