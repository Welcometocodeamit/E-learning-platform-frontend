import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../Course update dialog/dialog/dialog.component';
import { CourseService } from 'src/app/Services/course.service';
import { CartService } from 'src/app/Services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { FeedbackBackend } from 'src/app/Models/FeedbackBackend';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { AdminServiceService } from 'src/app/Services/admin-service.service';
import { DialogAnimationsExampleDialogComponent } from './Dialog/dialog-animations-example-dialog/dialog-animations-example-dialog.component';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {

  constructor(public dialog: MatDialog, private courseService:CourseService, private cartService:CartService, private activeRoute:ActivatedRoute, private formBuilder:FormBuilder, public userService:UserService, private adminService:AdminServiceService){}
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
  addtc:boolean=false


  openDialog2(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data:{
        courseId:this.courseId
      }
    });
  }


  course=null;
  feedback=null;
  createFeedback:FeedbackBackend
  showFeedback:boolean=false

  feedbackaddshowbtn='Add Feedback'

  courseId

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: this.courseId,
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  addToCart(){
    this.cartService.addToCart(this.courseService.perticularCourse.courseId)
    this.addtc=true
  }

  deleteFeedback(f){
    this.courseId=this.activeRoute.snapshot.params['courseId']
    this.courseService.deletePerticularFeedback=f
    this.openDialog2('0ms', '0ms')
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

  deleteCourse(){
    this.adminService.deleteCourse(this.courseService.perticularCourse.courseId)
  }



}
