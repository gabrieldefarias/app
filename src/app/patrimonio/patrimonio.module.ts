import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatrimonioPageRoutingModule } from './patrimonio-routing.module';

import { PatrimonioPage } from './patrimonio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatrimonioPageRoutingModule
  ],
  declarations: [PatrimonioPage]
})
export class PatrimonioPageModule {}
