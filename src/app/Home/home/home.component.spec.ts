import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FilterComponent } from './Filter component/filter/filter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { CourseComponent } from './Course component/course/course.component';
import { CourseDetailComponent } from './Course detail/course-detail/course-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// describe('HomeComponent', () => {
//   let component: HomeComponent;
//   let fixture: ComponentFixture<HomeComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [HomeComponent, FilterComponent, CourseComponent, CourseDetailComponent, CourseDetailComponent],
//       imports: [HttpClientTestingModule, MatSnackBarModule, ReactiveFormsModule, MatInputModule, MatSelectModule, BrowserAnimationsModule, MatSelectModule], // Add HttpClientTestingModule to imports
//       providers:[{ provide: MatSnackBar, useValue: jasmine.createSpyObj('MatSnackBar', ['open']) },
//       {
//         provide: ActivatedRoute,
//         useValue: {
//           snapshot: {
//             paramMap: convertToParamMap({ id: 'your-test-id' }) // Provide any required paramMap values
//           }
//         }
//       }]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HomeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
