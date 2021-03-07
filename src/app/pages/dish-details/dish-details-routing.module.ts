import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DishDetailsComponent } from './dish-details.component';

const routes: Routes = [{ path: '', component: DishDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishDetailsRoutingModule { }
