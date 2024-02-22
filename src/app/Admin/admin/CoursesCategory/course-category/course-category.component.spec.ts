import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCategoryComponent } from './course-category.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { AddCourseComponent } from './Add Course/add-course/add-course.component';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { forwardRef } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CourseCategoryComponent', () => {
  let component: CourseCategoryComponent;
  let fixture: ComponentFixture<CourseCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseCategoryComponent, AddCourseComponent],
      imports:[HttpClientTestingModule, MatSnackBarModule, ReactiveFormsModule, MatInputModule, MatSelectModule, BrowserAnimationsModule],
      providers:[
        {
                provide: ActivatedRoute,
                useValue: {
                  snapshot: {
                    paramMap: convertToParamMap({ id: 'your-test-id' }) // Provide any required paramMap values
                  }
                }
              },  {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => MatInputModule),
                multi: true,
              }]
    });
    fixture = TestBed.createComponent(CourseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
