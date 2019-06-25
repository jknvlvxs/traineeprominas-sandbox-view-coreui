import { Component, OnInit } from '@angular/core';
import { Student } from '../../../model/student';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../service/api.service';

@Component({
  templateUrl: 'studentid.component.html',
  styleUrls: ['studentid.component.scss']
})
export class StudentIdComponent implements OnInit {
  student: Student = { id: 0, name: '', lastName: '', age: 0, course: []};
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getStudent(this.route.snapshot.params.id);
  }

  getStudent(id) {
    this.api.getStudent(id)
      .subscribe(data => {
        this.isLoadingResults = false;
        if (data) {
        this.student = data[0];
        }
      });
  }

  deleteStudent(id) {
    this.isLoadingResults = true;
    this.api.deleteStudent(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/student']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
