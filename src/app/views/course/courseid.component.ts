import { Component, OnInit } from '@angular/core';
import { Course } from '../../../model/course';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../service/api.service';

@Component({
  templateUrl: 'courseid.component.html',
  styleUrls: ['courseid.component.scss']
})
export class CourseIdComponent implements OnInit {
  course: Course = { id: 0, name: '', period: 0, city: '', teacher: []};
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getCourse(this.route.snapshot.params.id);
  }

  getCourse(id) {
    this.api.getCourse(id)
      .subscribe(data => {
        this.isLoadingResults = false;
        if (data) {
        this.course = data[0];
        }
      });
  }

  deleteCourse(id) {
    this.isLoadingResults = true;
    this.api.deleteCourse(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/curso']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
