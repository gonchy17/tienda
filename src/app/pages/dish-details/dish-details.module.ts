import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishDetailsRoutingModule } from './dish-details-routing.module';
import { DishDetailsComponent } from './dish-details.component';


@NgModule({
  declarations: [DishDetailsComponent],
  imports: [
    CommonModule,
    DishDetailsRoutingModule
  ]
})
export class DishDetailsModule { }
