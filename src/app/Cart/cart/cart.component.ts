import { Component } from '@angular/core';
import { Course } from 'src/app/Models/Course';
import { OrderBackend } from 'src/app/Models/OrderBackend';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private cartService:CartService){
  }

  ngOnInit(){
    this.cartService.getCart()
    this.cartService.cartSubject.subscribe((data)=>{
      this.dataSource=this.cartService.cart
      this.getTotalPrice()
    })
  }

  ELEMENT_DATA: Course[];
  totalPrice:number=0
  createOrder:OrderBackend

  displayedColumns: string[] = ['courseId', 'courseName', 'price', 'action'];
  dataSource=[]

  getTotalPrice(){
    this.totalPrice=0
    this.dataSource.map((data)=>{
      this.totalPrice=this.totalPrice+data.price
    })
  }

  deleteFromCart(element){
    this.cartService.deleteFromCart(element.courseId)
  }

  buyNow(){
    let courseId=[]
    this.dataSource.map(data=>{
      courseId.push(data.courseId)
    })
    this.createOrder={totalPrice:this.totalPrice, courseId:courseId}
    this.cartService.buyNow(this.createOrder)
  }

}
