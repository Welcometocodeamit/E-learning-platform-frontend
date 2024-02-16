import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpService) { }

  User
  userSubject = new Subject()

  allOrders
  allOrderSubject=new Subject()

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

  
}
