import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  displayedColumns: string[] = ['courseFeedbackId', 'courseFeedback', 'courseName', 'userName', 'actions'];
  

  ELEMENT_DATA = [
    {courseFeedbackId: 1, courseFeedback: 'Hydrogen', courseName: "Angular", userName: 'H'},
    {courseFeedbackId: 2, courseFeedback: 'Helium', courseName: "Spring boot", userName: 'He'},
    {courseFeedbackId: 3, courseFeedback: 'Lithium', courseName: "Java", userName: 'Li'}
  ];

  dataSource = this.ELEMENT_DATA;

  deleteFeedback(element){
    console.log(element)
  }

}
