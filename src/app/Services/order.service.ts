import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpService) { }

  Order:any=[]
  orderSubject = new Subject()

  getOrders(){
    this.http.getOrder().subscribe((data)=>{
     this.Order=data
      this.orderSubject.next("Order received")
    })
  }
}
