import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-dialog-animations-example-dialog',
  templateUrl: './dialog-animations-example-dialog.component.html',
  styleUrls: ['./dialog-animations-example-dialog.component.css']
})
export class DialogAnimationsExampleDialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialogComponent>, private courseService:CourseService, private activeRoute:ActivatedRoute, @Inject(MAT_DIALOG_DATA) public data,) {
  
  }

  deleteFeedback(){
    this.courseService.deleteFeedbackById(this.courseService.deletePerticularFeedback, this.data.courseId)
  }
}
