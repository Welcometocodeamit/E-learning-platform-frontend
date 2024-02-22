import { Component } from '@angular/core';
import { HttpService } from './Services/http.service';
import { UserService } from './Services/user.service';
import { Token } from './Models/Token';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private previousUrl: string;
  private currentUrl: string;
  constructor(private http:HttpService, private userService:UserService, private router:Router,  private spinner: NgxSpinnerService, private route:Router, private activeRoute:ActivatedRoute){

  }



  username=this.userService.username
  ngOnInit(){

    this.route.events.subscribe((event)=>{
      if (event instanceof NavigationStart) {
        // console.log('start')
        // this.spinner.show();
      }else if (event instanceof NavigationEnd) {
        // setTimeout(() => {
        //   this.spinner.hide();
        // }, 1000);

        console.log("end")

      } })


    this.userService.usernameSub.subscribe(data=>{
      this.username=this.userService.username
    })

    let token = localStorage.getItem('token')
    if(token == null || token == "" || token == 'null'){
    }else{

      this.http.logInWithToken().subscribe((data:Token)=>{
      this.userService.isAdmin=data.admin
      this.userService.loggedIn=true
      this.userService.username=data.username
      this.userService.loggedInsub.next("logged in")
      this.userService.usernameSub.next("username")
        // Navigate to default route if no previous URL is found
        this.router.navigate(['/Home']);
      }, 
      (error)=>{
        this.http.displayError(error)
      })
    }
  }
}
