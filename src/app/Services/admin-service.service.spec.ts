import { TestBed } from '@angular/core/testing';

import { AdminServiceService } from './admin-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('AdminServiceService', () => {
  let service: AdminServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[{ provide: MatSnackBar, useValue: jasmine.createSpyObj('MatSnackBar', ['open']) }]
    });
    service = TestBed.inject(AdminServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
