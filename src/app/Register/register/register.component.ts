import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserType } from 'src/app/Models/UserType';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private formBuilder:FormBuilder, private userService:UserService){}

  hide=true

  registerForm:FormGroup

  gender: string[] = ['male', 'female', 'prefer not to say'];
  userType: UserType[] = [{userTypeId:1, userType:"ADMIN"}, {userTypeId:2, userType:"USER"}];


  
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email:['', Validators.required, Validators.email],
      gender: ['', Validators.required],
      userType:['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit(){
    this.registerForm.value.userType={userTypeId:this.registerForm.value.userType}
    this.userService.signUp(this.registerForm.value)

  }

}
