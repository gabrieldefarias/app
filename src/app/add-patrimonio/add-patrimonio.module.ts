import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPatrimonioPageRoutingModule } from './add-patrimonio-routing.module';

import { AddPatrimonioPage } from './add-patrimonio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPatrimonioPageRoutingModule
  ],
  declarations: [AddPatrimonioPage]
})
export class AddPatrimonioPageModule {}
