import { Component } from '@angular/core';
import { AdminServiceService } from 'src/app/Services/admin-service.service';

@Component({
  selector: 'app-course-category',
  templateUrl: './course-category.component.html',
  styleUrls: ['./course-category.component.css']
})
export class CourseCategoryComponent {

  constructor(private adminService:AdminServiceService){}

  showAddCourseVariable:boolean=true
  showAddCategoryVariable:boolean=false

  showAddCourse(){
    this.showAddCourseVariable=true
    this.showAddCategoryVariable=false
  }

  showAddCategory(){
    this.showAddCourseVariable=false
    this.showAddCategoryVariable=true
  }

}
