import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseComponent } from './add-course.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCourseComponent],
      imports:[HttpClientTestingModule, MatSnackBarModule, ReactiveFormsModule, MatInputModule, BrowserAnimationsModule, MatSelectModule],
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
    fixture = TestBed.createComponent(AddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
