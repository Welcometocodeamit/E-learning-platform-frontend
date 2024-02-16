import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private formBuilder:FormBuilder, private userService:UserService){}

  hide=true

  loginForm:FormGroup

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:['', Validators.required, Validators.email],
      password: ['', Validators.required]
    });
  }

  submit(){
    this.userService.logIn(this.loginForm.value)
  }

  logOut(){
  }

}
