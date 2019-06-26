import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../../model/teacher';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../service/api.service';

@Component({
  templateUrl: 'teacherid.component.html',
  styleUrls: ['teacherid.component.scss']
})
export class TeacherIdComponent implements OnInit {
  teacher: Teacher = { id: 0, name: '', lastName: '', phd: false};
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getTeacher(this.route.snapshot.params.id);
  }

  getTeacher(id) {
    this.api.getTeacher(id)
      .subscribe(data => {
        this.isLoadingResults = false;
        if (data) {
          this.teacher = data[0];
        }
      });
  }

  deleteTeacher(id) {
    this.isLoadingResults = true;
    this.api.deleteTeacher(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/professor']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
