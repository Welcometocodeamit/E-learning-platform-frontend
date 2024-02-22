import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports:[HttpClientTestingModule, MatSnackBarModule, MatTableModule],
      providers:[
        {
                provide: ActivatedRoute,
                useValue: {
                  snapshot: {
                    paramMap: convertToParamMap({ id: 'your-test-id' }) // Provide any required paramMap values
                  }
                }
              }]
    });
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
