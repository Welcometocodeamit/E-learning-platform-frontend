import { Component } from '@angular/core';
import { User } from 'src/app/Models/User';
import { AdminServiceService } from 'src/app/Services/admin-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private adminService:AdminServiceService){}

  ngOnInit(){
    this.adminService.getAllUsers()
    this.adminService.userSubject.subscribe((data)=>{
      this.dataSource=this.adminService.User
    })
  }

  ELEMENT_DATA: User[] = [];

  displayedColumns: string[] = ['userId', 'firstName', 'lastName', 'email', 'gender', 'userType', 'action'];
  dataSource = this.ELEMENT_DATA;

  deleteUser(userId:number){
    this.adminService.deleteUser(userId)
  }

  getBool(element){
    let bool 
    if(element.userType.userTypeId==2){
      bool=false
      return bool
    }else{
      bool=true
    }
    return bool
  }


}
