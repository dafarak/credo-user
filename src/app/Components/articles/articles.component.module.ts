import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SlideComponent } from '../slide/slide.component';
import { SlideModule } from '../slide/slide.component.module';
import { ArticlesRoutingModule } from './articles.component-routing.module';
import { ArticlesComponent } from './articles.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticlesRoutingModule,
    SlideModule
  ],
  declarations: [ArticlesComponent],
  exports:[],
})
export class ArticlesModule {}
