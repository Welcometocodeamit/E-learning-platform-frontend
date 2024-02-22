import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FilterComponent } from './Filter component/filter/filter.component';
import { CourseComponent } from './Course component/course/course.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './Course component/course/Course card/card/card.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, NgModel, ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {NgFor} from '@angular/common';
import { CourseDetailComponent } from './Course detail/course-detail/course-detail.component';
import { DialogComponent } from './Course update dialog/dialog/dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DialogAnimationsExampleDialogComponent } from './Course detail/course-detail/Dialog/dialog-animations-example-dialog/dialog-animations-example-dialog.component';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    HomeComponent,
    FilterComponent,
    CourseComponent,
    CardComponent,
    DialogComponent,
    CourseDetailComponent,
    DialogAnimationsExampleDialogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatRadioModule,
    NgFor,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatBadgeModule
    
   ]
})
export class HomeModule { }
