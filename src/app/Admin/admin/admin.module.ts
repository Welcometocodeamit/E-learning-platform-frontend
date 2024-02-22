import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CourseCategoryComponent } from './CoursesCategory/course-category/course-category.component';
import { UsersComponent } from './Users/users/users.component';
import { FeedbackComponent } from './Feedback/feedback/feedback.component';
import {MatTableModule} from '@angular/material/table';
import { AddCourseComponent } from './CoursesCategory/course-category/Add Course/add-course/add-course.component';
import { AddCategoryComponent } from './CoursesCategory/course-category/Add category/add-category/add-category.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AllOrdersComponent } from './All orders/all-orders/all-orders.component';
import { OrdersChartComponent } from './All orders/all-orders/Chart/orders-chart/orders-chart.component';
import { Chart, registerables } from 'chart.js';
import { PieChartComponent } from './All orders/all-orders/Chart/Weekly chart/pie-chart/pie-chart.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AdminComponent,
    CourseCategoryComponent,
    UsersComponent,
    FeedbackComponent,
    AddCourseComponent,
    AddCategoryComponent,
    AllOrdersComponent,
    OrdersChartComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule
  ]
})
export class AdminModule { }
