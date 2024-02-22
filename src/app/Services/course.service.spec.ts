import { TestBed } from '@angular/core/testing';

import { CourseService } from './course.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

describe('CourseService', () => {
  let service: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, MatSnackBarModule],
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
    service = TestBed.inject(CourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
