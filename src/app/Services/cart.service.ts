import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Subject } from 'rxjs';
import { OrderBackend } from '../Models/OrderBackend';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpService) { }

  cart=null
  cartSubject=new Subject()

  getCart(){
    this.http.getCart().subscribe((data)=>{
      this.cart=data
      this.cartSubject.next("cart received")
    })
  }

  addToCart(courseId:number){
    this.http.addToCart(courseId).subscribe((data)=>{
      this.getCart()
    })
  }

  deleteFromCart(courseId:number){
    this.http.deleteFromCart(courseId).subscribe((data)=>{
      this.getCart()
    })
  }

  buyNow(Order:OrderBackend){
    this.http.buyCourses(Order).subscribe((data)=>{
      this.getCart()
    })
  }
}
