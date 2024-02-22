import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { CourseCategoryComponent } from './CoursesCategory/course-category/course-category.component';
import { UsersComponent } from './Users/users/users.component';
import { FeedbackComponent } from './Feedback/feedback/feedback.component';
import { AddCourseComponent } from './CoursesCategory/course-category/Add Course/add-course/add-course.component';
import { AddCategoryComponent } from './CoursesCategory/course-category/Add category/add-category/add-category.component';
import { AllOrdersComponent } from './All orders/all-orders/all-orders.component';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminComponent,
        CourseCategoryComponent,
        UsersComponent,
        FeedbackComponent,
        AddCourseComponent,
        AddCategoryComponent,
        AllOrdersComponent],

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
          HttpClientTestingModule,
          MatSnackBarModule,
          BrowserAnimationsModule
        ],
        providers:[{ provide: MatSnackBar, useValue: jasmine.createSpyObj('MatSnackBar', ['open']) },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: 'your-test-id' }) // Provide any required paramMap values
            }
          }
        }]
    });
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
