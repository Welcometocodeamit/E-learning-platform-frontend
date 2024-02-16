import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/Models/Category';
import { CourseBackend } from 'src/app/Models/CourseBackend';
import { CourseService } from 'src/app/Services/course.service';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  constructor(private formBuilder:FormBuilder, private courseService:CourseService, private http:HttpService){}
  addCourseForm:FormGroup
  level:string[]=["Beginer", "Intermediate", "Hard"]
  category:Category[]=[]
  createCourse:CourseBackend
  createCategory:Category
  ngOnInit(): void {
    this.courseService.getCategory()
    this.courseService.categorySubject.subscribe((data)=>{
      this.category=this.courseService.categories
    })

    this.addCourseForm = this.formBuilder.group({
      courseName: ['', Validators.required],
      courseDescription: ['', Validators.required],
      courseLevel:['', Validators.required, Validators.email],
      price: ['', Validators.required],
      image: ['', ],
      category:['', Validators.required]
    });
  }

  submit(){
    this.createCategory={categoryId:this.addCourseForm.value.category, categoryTitle:''}
    this.addCourseForm.value.category=this.createCategory
    this.createCourse=this.addCourseForm.value
    console.log(this.createCourse)
    this.courseService.addCourse(this.createCourse)
  }

}
