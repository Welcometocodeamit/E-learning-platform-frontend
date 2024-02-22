import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports:[HttpClientTestingModule, MatSnackBarModule, MatCardModule],
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
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
