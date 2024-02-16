import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';

const routes: Routes = [
  {path:'Login',  loadChildren: () => import('src/app/Login/login/login.module').then((m) => m.LoginModule)},
  {path:'Register',  loadChildren: () => import('src/app/Register/register/register.module').then((m) => m.RegisterModule)},
  {path:'Home',  loadChildren: () => import('src/app/Home/home/home.module').then((m) => m.HomeModule)},
  {path:'Orders',  loadChildren: () => import('src/app/Orders/order.module').then((m) => m.OrderModule)},
  {path:'Admin',  loadChildren: () => import('src/app/Admin/admin/admin.module').then((m) => m.AdminModule)},
  {path:'Cart',  loadChildren: () => import('src/app/Cart/cart/cart.module').then((m) => m.CartModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
