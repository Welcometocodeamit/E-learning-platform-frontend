import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar/navbar.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './Home/home/home.module';
import { OrdersComponent } from './Orders/orders.component';
import { MatTableModule } from '@angular/material/table';
import { OrderModule } from './Orders/order.module';
import { AdminModule } from './Admin/admin/admin.module';
import {MatBadgeModule} from '@angular/material/badge';
import { CartModule } from './Cart/cart/cart.module';
import { RegisterModule } from './Register/register/register.module';
import { LoginModule } from './Login/login/login.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {  HttpInterceptorInterceptor } from './Interceptor/http.interceptor';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrdersComponent,

  ],
  imports: [
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
    HttpClientModule,
    MatSnackBarModule
  ],
  exports:[
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
