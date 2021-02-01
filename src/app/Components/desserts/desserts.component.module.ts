import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SlideComponent } from '../slide/slide.component';
import { SlideModule } from '../slide/slide.component.module';
import { DessertsComponent } from './desserts.component';
import { DesertsRoutingModule } from './desserts.component-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesertsRoutingModule,
    SlideModule
  ],
  declarations: [DessertsComponent],
  exports:[],
})
export class DesertsModule {}
