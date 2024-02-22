import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Category } from 'src/app/Models/Category';
import { Course } from 'src/app/Models/Course';
import { CourseBackend } from 'src/app/Models/CourseBackend';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder:FormBuilder,
    private courseService:CourseService
  ) {}

  form:FormGroup
  level:string[]=["Beginer", "Intermediate", "Hard"]
  Catgeory:Category[]=this.courseService.categories
  selectedCourse=this.courseService.perticularCourse

  ngOnInit(){

      this.form=this.formBuilder.group({
        courseName:[this.selectedCourse.courseName, Validators.required],
        courseDescription:[this.selectedCourse.courseDescription, Validators.required],
        courseLevel:[this.selectedCourse.courseLevel, Validators.required],
        price:[this.selectedCourse.price, Validators.required],
        image:[this.selectedCourse.image],
        category:[this.selectedCourse.category.categoryId, Validators.required],
      })
  }

  

  save(){
    let course:CourseBackend
    let category:Category={categoryId:this.form.value.category, categoryTitle:''}
    course=this.form.value
    course.courseId=this.selectedCourse.courseId
    course.category=category
    this.courseService.updateCourse(course)
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  

}
