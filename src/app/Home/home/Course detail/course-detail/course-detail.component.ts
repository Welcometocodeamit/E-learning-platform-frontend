import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../Course update dialog/dialog/dialog.component';
import { CourseService } from 'src/app/Services/course.service';
import { CartService } from 'src/app/Services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { FeedbackBackend } from 'src/app/Models/FeedbackBackend';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {

  constructor(public dialog: MatDialog, private courseService:CourseService, private cartService:CartService, private activeRoute:ActivatedRoute, private formBuilder:FormBuilder, public userService:UserService){}
  feedbackForm:FormGroup
  crudCourse:boolean=this.userService.isAdmin

  ngOnInit(){
    this.courseService.getCourseByCourseId(this.activeRoute.snapshot.params['courseId'])
 
      this.courseService.courseDetailSubject.subscribe((data)=>{
        this.course=this.courseService.perticularCourse
      })

      this.courseService.courseFeedbackSubject.subscribe((data)=>{
        this.feedback=this.courseService.perticularFeedback
      })

      this.feedbackForm = this.formBuilder.group({
        feedback:['', Validators.required]
      });
    
  }


  course=null;
  feedback=null;
  createFeedback:FeedbackBackend
  showFeedback:boolean=false

  feedbackaddshowbtn='Add Feedback'

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  addToCart(){
    this.cartService.addToCart(this.courseService.perticularCourse.courseId)
  }

  deleteFeedback(f){
    this.courseService.deleteFeedbackById(f, this.activeRoute.snapshot.params['courseId'])
  }

  submit(){
    this.createFeedback={courseFeedbackId:0, courseFeedback:this.feedbackForm.value.feedback}
    this.courseService.addFeedback(this.activeRoute.snapshot.params['courseId'], this.createFeedback)
    this.showFeedback=false
    this.feedbackaddshowbtn=this.feedbackaddshowbtn=='Cancel'?"Add Feedback":"Cancel"
  }

  addFeedback(){
    this.feedbackaddshowbtn=this.feedbackaddshowbtn=='Cancel'?"Add Feedback":"Cancel"
    this.showFeedback=!this.showFeedback
  }



}
