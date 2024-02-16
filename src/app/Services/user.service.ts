import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService, private router:Router, private cartService:CartService) { }

  ngOnInit(){
  }

  isAdmin:boolean=null
  loggedIn:boolean=false
  username=null

  usernameSub= new Subject()
  loggedInsub=new Subject()


  token

  signUp(user){
    this.http.signUp(user).subscribe((data)=>{
      this.http.displayResponse(data)
      this.router.navigate(['/Login'])
    },
    (error)=>{
      this.http.displayError(error)
    })
  }

  logIn(user){
    localStorage.setItem('token', JSON.stringify(''))
    this.http.login(user).subscribe((data:any)=>{
      this.token=data.jwtToken
      localStorage.setItem('token', JSON.stringify(this.token))
      console.log(data)
      this.http.displayResponse({message:"Login sucess"})
      this.cartService.getCart()
      this.isAdmin=data.admin
      this.loggedIn=true
      this.username = data.username
      this.loggedInsub.next("logged")
      this.usernameSub.next("username")
      this.router.navigate(['/Home'])
    },
    (error)=>{
      this.http.displayError(error)
    })
  }
}
