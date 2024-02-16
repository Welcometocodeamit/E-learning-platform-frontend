
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/Models/Category';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  constructor(private formBuilder:FormBuilder, private courseService:CourseService){}
  addCategoryForm:FormGroup
  createCategory:Category

  ngOnInit(): void {
    this.addCategoryForm = this.formBuilder.group({
      categoryName: ['', Validators.required]
    });
  }

  submit(){
    this.createCategory={categoryId:0, categoryTitle:this.addCategoryForm.value.categoryName}
    this.courseService.addCategory(this.createCategory)
  }

  

}
