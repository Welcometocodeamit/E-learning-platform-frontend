import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOrdersComponent } from './all-orders.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

describe('AllOrdersComponent', () => {
  let component: AllOrdersComponent;
  let fixture: ComponentFixture<AllOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllOrdersComponent],
      imports:[HttpClientModule, MatSnackBarModule, MatTableModule],
      providers:[{ provide: MatSnackBar, useValue: jasmine.createSpyObj('MatSnackBar', ['open']) }]
    });
    fixture = TestBed.createComponent(AllOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
