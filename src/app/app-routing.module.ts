import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = 
[
  {path:'', redirectTo:'/home',pathMatch:'full'},//agregado
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, { path: 'notFound', loadChildren: () => import('./pages/notfound/notfound.module').then(m => m.NotfoundModule) },
   { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
{ path: 'dish-details', loadChildren: () => import('./pages/dish-details/dish-details.module').then(m => m.DishDetailsModule) },
   //{path: 'home', component:HomeComponent}
  
  ];
   
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
