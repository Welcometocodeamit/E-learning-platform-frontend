import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, RouterModule, convertToParamMap } from '@angular/router';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports:[HttpClientTestingModule, MatSnackBarModule, MatToolbarModule, RouterModule],
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
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
