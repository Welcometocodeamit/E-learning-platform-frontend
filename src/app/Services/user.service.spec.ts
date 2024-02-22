import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing"
import { UserService } from './user.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

describe('UserService', () => {
  let service: UserService;

  beforeEach(()=>{
      TestBed.configureTestingModule({
          imports: [HttpClientTestingModule, MatSnackBarModule],
          providers: [UserService, { provide: MatSnackBar, useValue: jasmine.createSpyObj('MatSnackBar', ['open']) }]
      });
      service = TestBed.inject(UserService); 
  });

  it('should create', () => {
      expect(service).toBeTruthy();
  });


});
