import { Component } from '@angular/core';
import { AdminServiceService } from 'src/app/Services/admin-service.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent {

  previouspage:boolean
  nextpage:boolean
  counter:number

  constructor(private adminService:AdminServiceService){}

  ngOnInit(){
    this.adminService.getAllOrders(0)
    this.adminService.allOrderSubject.subscribe((data:any)=>{
      this.dataSource=this.adminService.allOrders
      this.previouspage=data.first
      this.nextpage=data.last
      this.counter=data.pageable.pageNumber
    })
  }

  dataSource = []
  displayedColumns: string[] = ['id', 'orderDate', 'user', 'course','totlePrice'];


  getOrderCourseName(element:any){
    let courseName=''
    element.course.map(data=>{
      courseName=courseName+" + "+data.courseName
    })
    return courseName.slice(2)
  }

  pp(){
    if(this.counter>0){
      this.adminService.getAllOrders(this.counter-1)
    }
  }

  np(){
    this.adminService.getAllOrders(this.counter+1)
  }

}
