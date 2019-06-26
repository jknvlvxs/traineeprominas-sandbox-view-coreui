import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { User } from '../../../model/user';
import { Course } from '../../../model/course';
import { Student } from '../../../model/student';

@Component({
  templateUrl: 'graficos.component.html'
})
export class GraficosComponent implements OnInit {
  profile = [];
  admin = 0;
  guess =  0;
  barChartOptions: any;
  barChartLabels = [];
  barChartType: string;
  barChartLegend: boolean;
  barChartData: any[];
  pieChartLabels: string[];

  course = [];
  student = [];
  pieChartData: number[] ;
  pieChartType: string;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getUsers().subscribe((res: User[]) => {
      res.forEach(y => {
        if (y.profile === 'admin') {
          this.admin++;
        } else {
          this.guess++;
        }
      });
      this.api.getCourses().subscribe((res: Course[]) => {
        res.forEach(y => {
          this.course.push(y.name);
          this.api.getStudents().subscribe((res: Student[]) => {
            let count = 0;
            res.forEach(j => {
                if (j.course[0].name === y.name) {
                  count++;
                }
            });
            this.student.push(count);
          });
        });
      });
      this.plotChart();
    });
  }

  plotChart() {
 // barChart
 console.log(this.student);
  this.barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
  }
  };

  this.barChartLabels = ['profile'];
  this.barChartType = 'bar';
  this.barChartLegend = true;

  this.barChartData = [
  {data: [this.admin || 0], label: 'admin'},
  {data: [this.guess || 0], label: 'guess'}
];

  // Pie
  this.pieChartLabels = this.course;
  this.pieChartData = this.student;
  this.pieChartType = 'pie';
  }

   // events
   chartClicked(e: any): void {
    // console.log(e);
  }
  chartHovered(e: any): void {
    // console.log(e);
  }
}
