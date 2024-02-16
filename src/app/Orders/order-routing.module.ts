import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { LoginGuardService } from '../Services/login-guard.service';

const routes: Routes = [
  {path:'', component:OrdersComponent, canActivate:[LoginGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
