import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterComponent],
      imports:[HttpClientTestingModule, MatSnackBarModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatRadioModule, BrowserAnimationsModule, MatTableModule],
      providers:[{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            paramMap: convertToParamMap({ id: 'your-test-id' }) 
          }
        }
      },
      { provide: MatSnackBar, useValue: jasmine.createSpyObj('MatSnackBar', ['open']) }]
    });
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
