import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(private router:Router, private courseService:CourseService){}

  @Input() courseData:any



  goToCourse(){
    // this.courseService.perticularCourse=this.courseData
    this.router.navigate([`Home/Course/${this.courseData.courseId}`])
  }

}
