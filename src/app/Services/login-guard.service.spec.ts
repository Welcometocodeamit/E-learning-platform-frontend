import { TestBed } from '@angular/core/testing';

import { LoginGuardService } from './login-guard.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

describe('LoginGuardService', () => {
  let service: LoginGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,
      MatSnackBarModule],
      providers:[{ provide: MatSnackBar, useValue: jasmine.createSpyObj('MatSnackBar', ['open'])}]
    });
    service = TestBed.inject(LoginGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
