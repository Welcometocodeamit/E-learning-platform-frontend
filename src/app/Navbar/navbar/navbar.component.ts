import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { LoginGuardService } from 'src/app/Services/login-guard.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private cartSerice:CartService, private userService:UserService, private router:Router){}
  loginorlogout:boolean=this.userService.loggedIn
  ngOnInit(){
    this.login()
    this.userService.loggedInsub.subscribe((data)=>{
      this.loginorlogout=this.userService.loggedIn
    })

    this.cartSerice.getCart()
    this.cartSerice.cartSubject.subscribe((data)=>{
      this.count=this.cartSerice.cart.length
    })


    
  }

  count:number=0

  getAdmin(){
    return this.userService.isAdmin
  }

  getLoggedIn(){
    return this.userService.loggedIn
  }

  logOut(){
    this.userService.isAdmin=false
    this.userService.loggedIn=false
    this.userService.username=null
    this.userService.usernameSub.next("username")
    this.userService.loggedInsub.next("logout")
    localStorage.setItem('token', null)
  }

  login(){
    setTimeout(()=>{
      if(this.loginorlogout){
        this.router.navigate(["Home"])
      }
    }, 1000)

  }

  

}
