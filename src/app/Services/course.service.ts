import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { Category } from '../Models/Category';
import { Course } from '../Models/Course';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SucessMessage } from '../Models/SucessMessage';
import { FeedbackBackend } from '../Models/FeedbackBackend';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpService, private router:Router, private snackBar: MatSnackBar, private activeRoute:ActivatedRoute) { }

  // subjects
  // subject for course
  subject=new Subject()

  // subject for category
  categorySubject=new Subject()

  // subject for courseDetail component
  courseDetailSubject = new BehaviorSubject("course updated")

  // subject for perticular course feedback
  courseFeedbackSubject=new Subject()

  // filter variable subject
  variableSubject=new Subject()

  // 

  // all courses
  courses:any

  // all categories
  categories:any=null

  // perticular course for course detail component
  perticularCourse:any=null
  dataPresent=true

  // perticular feedback
  perticularFeedback

  getCourses(page){
    this.http.getCourse(page).subscribe((data:any)=>{
      this.courses=data.content
      this.subject.next(data)
    },
    (error)=>{
      this.snackBar.open(error.error.message, "Dismiss");
    }
    )
  }

  getCategory(){
    this.http.getCategory().subscribe((data)=>{
      this.categories=data
      this.categorySubject.next("category updated")
    },
    (error)=>{
      this.snackBar.open(error.error.message, "Dismiss");
    })
  }

  getCourseByCategory(categoryId:number, page:number){
    this.http.getCourseByCategoryName(categoryId, page).subscribe((data:any)=>{
      this.courses=data.content
      this.subject.next(data)
    },
    (error)=>{
      this.snackBar.open(error.error.message, "Dismiss");
    })
  }

  getCourseByCourseName(courseName:string){
    this.http.getCourseByCourseName(courseName).subscribe((data)=>{
      this.courses=data
      this.subject.next("courses updated")
    },
    (error)=>{
      this.snackBar.open(error.error.message, "Dismiss");
    })
  }

  updateCourse(course:Course){
    this.http.addCourse(course).subscribe((data)=>{
      this.router.navigate(["Home"])
    },
    (error)=>{
      this.snackBar.open(error.error.message, "Dismiss");
    })
  }

  addCourse(course:Course){
    this.http.createCourse(course).subscribe((data:SucessMessage)=>{
      this.snackBar.open(data.message, "Dismiss")
      window.location.reload()
    },
    (error)=>{
      this.snackBar.open(error.error.message, "Dismiss");
    })
  }

  addCategory(category:Category){
    this.http.createCategory(category).subscribe((data:SucessMessage)=>{
      this.snackBar.open(data.message, "Dismiss")
      window.location.reload()
    },
    (error)=>{
      this.snackBar.open(error.error.message, "Dismiss");
    })
  }

  getCourseByCourseId(courseId:number){
    this.getFeedbackByCourseId(courseId)
    this.http.getCourseByCourseId(courseId).subscribe((data)=>{
      this.perticularCourse=data
      this.courseDetailSubject.next("Course updated")
    },
    (error)=>{
      this.snackBar.open(error.error.message, "Dismiss");
    })
  }

  getFeedbackByCourseId(courseId:number){
    this.http.getFeedbackByCourseId(courseId).subscribe((data)=>{
      this.perticularFeedback=data
      this.courseFeedbackSubject.next("feedback")
    },
    (error)=>{
      
      this.snackBar.open(error.error.message, "Dismiss");
    })
  }

  deleteFeedbackById(f, courseId){
    this.http.deleteFeedback(f).subscribe((data)=>{
      this.http.displayResponse(data)
      this.perticularFeedback=[]
      this.getFeedbackByCourseId(courseId)
    },
    (error)=>{

      this.snackBar.open(error.error.message, "Dismiss");
    })
  }

  addFeedback(courseId:number, feedback:FeedbackBackend){
    this.http.addFeedback(courseId, feedback).subscribe((data)=>{
      this.http.displayResponse(data)
      this.getFeedbackByCourseId(courseId)
    },
    (error)=>{
      this.http.displayError(error)
    })
  }



  
}
