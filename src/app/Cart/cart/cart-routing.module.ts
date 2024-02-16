import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { LoginGuardService } from 'src/app/Services/login-guard.service';

const routes: Routes = [
  {path:'', component:CartComponent, canActivate:[LoginGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
