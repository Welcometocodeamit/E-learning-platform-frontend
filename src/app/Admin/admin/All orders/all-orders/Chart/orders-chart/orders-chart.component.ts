import { Component, Input } from '@angular/core';
import {Chart, registerables} from 'node_modules/chart.js'
import { AdminServiceService } from 'src/app/Services/admin-service.service';
Chart.register(...registerables)

@Component({
  selector: 'app-orders-chart',
  templateUrl: './orders-chart.component.html',
  styleUrls: ['./orders-chart.component.css']
})
export class OrdersChartComponent {
  constructor(private adminService: AdminServiceService) { }

  @Input() chartData;
  mainData = [];
  labels = [];
  chart: any;

  ngOnInit(): void {
    this.adminService.chartSubject.subscribe((data) => {
      this.setData();
    });
    this.setData();
  }

  setData(): void {
    this.mainData = [];
    this.labels = [];
    this.chartData.forEach(data => {
      let simpleDate = new Date(data.date).toLocaleDateString()
      this.labels.push(simpleDate);
      this.mainData.push(data.count);
    });
    this.RenderChart();
  }

  RenderChart(): void {

    const existingChart = Chart.getChart(this.chart);

    if (existingChart) {
      existingChart.destroy();
    }
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Total Orders',
          data: this.mainData,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  

}

