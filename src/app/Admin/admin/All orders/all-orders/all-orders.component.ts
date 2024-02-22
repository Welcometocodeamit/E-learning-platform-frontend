import { ChangeDetectorRef, Component } from '@angular/core';
import { AdminServiceService } from 'src/app/Services/admin-service.service';
import {Chart, registerables} from 'node_modules/chart.js'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilterDate } from 'src/app/Models/FilterDate';
import { FutureDateValidator } from 'src/app/Validators/FutureValidator';
Chart.register(...registerables)
@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent {

  previouspage:boolean
  nextpage:boolean
  counter:number

  form:FormGroup
  chartData = [];
  mainData = [5,2,3];
  labels = [];
  chart: any;
  dailyChartData
  weeklyChartData



  constructor(private adminService:AdminServiceService, private cdr: ChangeDetectorRef,  private formBuilder:FormBuilder){
    const now = new Date().getTime();
    this.minDate = new Date(now - 86400000);
    this.maxDate = new Date(now + 86400000);
  }

  minDate: Date;
  maxDate: Date;

  ngOnInit(){
    this.adminService.getAllOrders(0)
    this.adminService.getDataForDateChart()
    this.adminService.allOrderSubject.subscribe((data:any)=>{
      this.dataSource=this.adminService.allOrders
      this.previouspage=data.first
      this.nextpage=data.last
      this.counter=data.pageable.pageNumber
    })

    this.adminService.chartSubject.subscribe((data) => {
      this.dailyChartData=this.adminService.chartDate
      this.weeklyChartData=this.adminService.weeklyData
      this.cdr.detectChanges();
    });

    this.form=this.formBuilder.group({
      from:['', [Validators.required]],
      to:['',[Validators.required]]
    })
  }

 

  today = new Date(); 


  dataSource = []
  displayedColumns: string[] = ['id', 'orderDate', 'user', 'course','totlePrice'];


  save(){
  
    let filterDate:FilterDate={fromDate:this.form.value.from, toDate:this.form.value.to}
    
    this.adminService.getDailyFilteredData(filterDate)
  }


  getOrderCourseName(element){
    let courseName=''
    element.course.map(data=>{
      courseName=courseName+" + "+data.courseName
    })
    return courseName.slice(2)
  }

  pp(){
    if(this.counter>0){
      this.adminService.getAllOrders(this.counter-1)
    }
  }

  np(){
    this.adminService.getAllOrders(this.counter+1)
  }

}
