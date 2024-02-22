import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, catchError, finalize, map, tap, throwError } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  token:string = null

  constructor(private spinner:NgxSpinnerService) {

    if(localStorage.getItem('token') == null){
      localStorage.setItem('token', JSON.stringify(this.token))
    }else{
      this.token=JSON.parse(localStorage.getItem('token'))
    }

  }

  getToken(){
    this.token=JSON.parse(localStorage.getItem('token'))
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let modifiedRequest;
    this.getToken()
    if(this.token == null || this.token=='null' || this.token==''){
     
     
  }else{
    modifiedRequest = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${this.token}`).set('Content-Type', 'application/json'),
    });
    this.spinner.show()

    return next.handle(modifiedRequest).pipe(
      catchError((error: any) => {
        // Hide spinner on error
         setTimeout(() => {
          this.spinner.hide();
        }, 300);
        // this.spinner.hide();
        return throwError(error);
      }),
      finalize(() => {
        // Hide spinner when the request completes (success or error)
        setTimeout(() => {
          this.spinner.hide();
        }, 300);
      })
    );;

  }

    return next.handle(request)
}}
