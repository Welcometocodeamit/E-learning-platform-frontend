import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { FilterDate } from '../Models/FilterDate';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpService, private router:Router) { }

  User
  userSubject = new Subject()

  allOrders
  allOrderSubject=new Subject()

  chartDate
  chartSubject=new Subject()

  weeklyData


  getAllUsers(){
    this.http.getUser().subscribe((data)=>{
      this.User=data
      this.userSubject.next("User fetched")
    },
    (error)=>{
      this.http.displayError(error)
    })
  }

  deleteUser(userId:number){
    this.http.deleteUser(userId).subscribe((data)=>{
      this.http.displayResponse(data)
      this.getAllUsers()
    },
    (error)=>{
      this.http.displayError(error)
    })
  }

  // get all orders
  getAllOrders(page:number){
    this.http.getAllOrders(page).subscribe((data:any)=>{
      this.allOrders=data.content
      this.allOrderSubject.next(data)
    },
    (error)=>{
      this.http.displayError(error)
    })
  }


  deleteCourse(courseId:number){
    this.http.deleteCourse(courseId).subscribe((data)=>{
      this.router.navigate(["/Home"])
      this.http.displayResponse(data)
    },
    (error)=>{
      this.http.displayError(error)
    })
  }

  getDataForDateChart(){
    this.http.getChartDate().subscribe((data)=>{
      this.chartDate=data
      this.getWeeklyData()
      
    },
    (error)=>{
      this.http.displayError(error)
    })
  }

  getWeeklyData(){
    this.http.getWeeklyData().subscribe((data)=>{
      this.weeklyData=data
      this.chartSubject.next("")
    },
    (error)=>{
      this.http.displayError(error)
    })
  }

  getDailyFilteredData(filterDate:FilterDate){
    this.http.getDailyFilteredData(filterDate).subscribe((data)=>{
      this.chartDate=data
      this.getWeeklyFilteredData(filterDate)
    },
    (error)=>{
      this.http.displayError(error)
    })
  }

  getWeeklyFilteredData(filterDate:FilterDate){
    this.http.getWeeklyFilteredData(filterDate).subscribe((data)=>{
      this.weeklyData=data
      this.chartSubject.next("")
    },
    (error)=>{
      this.http.displayError(error)
    })
  }

  
}
