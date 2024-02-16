import { Component } from '@angular/core';
import { HttpService } from './Services/http.service';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:HttpService, private userService:UserService){}
  username=this.userService.username
  ngOnInit(){
    this.userService.usernameSub.subscribe(data=>{
      this.username=this.userService.username
    })

    let token = localStorage.getItem('token')
    if(token == null || token == "" || token == 'null'){
    }else{

      this.http.logInWithToken().subscribe((data:any)=>{
      this.userService.isAdmin=data.admin
      this.userService.loggedIn=true
      this.userService.username=data.username
      this.userService.loggedInsub.next("logged in")
      this.userService.usernameSub.next("username")
      }, 
      (error)=>{
        console.log(error.error)
      })
    }
  }
  title = 'eudemy';
}
