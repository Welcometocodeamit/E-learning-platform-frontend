import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { OrdersComponent } from './Orders/orders.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeModule } from './Home/home/home.module';
import { MatTableModule } from '@angular/material/table';
import { OrderModule } from './Orders/order.module';
import { AdminModule } from './Admin/admin/admin.module';
import { MatBadgeModule } from '@angular/material/badge';
import { CartModule } from './Cart/cart/cart.module';
import { RegisterModule } from './Register/register/register.module';
import { LoginModule } from './Login/login/login.module';

describe('AppComponent', () => {


  let snackBar: MatSnackBar;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, MatSnackBarModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        HomeModule,
        MatTableModule,
        OrderModule,
        AdminModule,
        MatBadgeModule,
        CartModule,
        RegisterModule,
        LoginModule,
        // HttpClientModule,
        MatSnackBarModule],
      declarations: [AppComponent,NavbarComponent,
        OrdersComponent],

      providers: [
        { provide: MatSnackBar, useValue: jasmine.createSpyObj('MatSnackBar', ['open']) }
      ]
    });

    // Inject the MatSnackBar service
    snackBar = TestBed.inject(MatSnackBar);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });





});
