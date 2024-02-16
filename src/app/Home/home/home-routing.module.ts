import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CourseDetailComponent } from './Course detail/course-detail/course-detail.component';
import { LoginGuardService } from 'src/app/Services/login-guard.service';

const routes: Routes = [
  {path:"", component:HomeComponent, canActivate:[LoginGuardService]},
  {path:"Course/:courseId", component:CourseDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
