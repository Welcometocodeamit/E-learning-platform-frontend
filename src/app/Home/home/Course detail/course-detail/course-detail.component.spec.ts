import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailComponent } from './course-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

// describe('CourseDetailComponent', () => {
//   let component: CourseDetailComponent;
//   let fixture: ComponentFixture<CourseDetailComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [CourseDetailComponent],
//       imports:[HttpClientTestingModule, MatDialogModule, MatSnackBarModule],
//       providers:[{ provide: MatSnackBar, useValue: jasmine.createSpyObj('MatSnackBar', ['open']) },
//       {
//         provide: ActivatedRoute,
//         useValue: {
//           snapshot: {
//             paramMap: convertToParamMap({ courseId: 1 }) // Change 'id' to 'courseId'
//           }
//         }
//       }]
//     });
//     fixture = TestBed.createComponent(CourseDetailComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
  

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
