import { Component } from '@angular/core';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  constructor(private courseService:CourseService){}

  filter:string=null

  pageVariable:number=0

  firstPage:boolean
  lastPage:boolean

  Courses=[]

  ngOnInit(){
    this.courseService.variableSubject.subscribe((data:string)=>{
      this.filter=data
    })
    this.courseService.getCourses(this.pageVariable)
    this.courseService.subject.subscribe((data:any)=>{
      this.Courses=this.courseService.courses
      this.firstPage=data.first
      this.lastPage=data.last
      this.pageVariable=data.pageable.pageNumber
    })
  }

  prevPage(){
    if(this.pageVariable>0){
      this.pageVariable-=1
      this.courseService.getCourses(this.pageVariable)
    }
  }
  nextPage(){
    this.pageVariable+=1
    this.courseService.getCourses(this.pageVariable)
  }

}
