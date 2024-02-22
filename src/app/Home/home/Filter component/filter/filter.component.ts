import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  category = [];
  catgoryForm:FormGroup
  courseForm:FormGroup
  variable:boolean=false
 

  

  constructor(private courseService:CourseService, private formBuilder: FormBuilder, private router:Router){}
  
  ngOnInit(){
    this.courseForm=this.formBuilder.group({
      course:['',]
    })

    this.catgoryForm = this.formBuilder.group({
      category:['',]
    });

    this.courseService.getCategory()
    this.courseService.categorySubject.subscribe((data)=>{
      
      this.category=this.courseService.categories
    })
  }
  
  searchByCategory(){
    if(this.catgoryForm.value.category=='all'){
      this.courseService.getCourses(0)
    }else{

      this.courseService.getCourseByCategory(this.catgoryForm.value.category, 0)
    }
    this.variable=true
  }

  searchByCourseName(){
    if(this.variable){

    }else{

      this.courseService.getCourseByCourseName(this.courseForm.value.course)
    }

  }

  filterCourse(x){
    if(this.variable){
      this.courseService.variableSubject.next(x.target.value)
    }
  }

  

  // refreshFilter(){
  //   window.location.reload()
  // }

}
