import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersComponent } from './orders.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersComponent],
      imports:[HttpClientTestingModule, MatSnackBarModule],
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
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
