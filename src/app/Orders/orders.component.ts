import { Component } from '@angular/core';
import { Order } from '../Models/Order';
import { OrderService } from '../Services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  constructor(private orderService:OrderService){}

  ngOnInit(){
    this.orderService.getOrders()
    this.orderService.orderSubject.subscribe((data)=>{
      this.dataSource=this.orderService.Order
    })
  }

  
  ELEMENT_DATA: Order[] = [];

  dataSource = []
  displayedColumns: string[] = ['id', 'orderDate', 'course', 'totlePrice'];
  

  getOrderCourseName(element:any){
    let courseName=''
    element.course.map(data=>{
      courseName=courseName+" + "+data.courseName
    })
    return courseName.slice(2)
  }

  
  
  

}
