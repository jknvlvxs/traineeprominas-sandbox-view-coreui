import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../../service/api.service';
import { Teacher } from '../../../model/teacher';

@Component({
  templateUrl: 'create.component.html',
  styleUrls: ['create.component.scss']
})
export class CreateComponent implements OnInit {
  dataSource: Teacher[];
  courseForm: FormGroup;
  name = '';
  period = 0;
  city = '';
  teacher: Teacher[];
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getTeacher();
    this.courseForm = this.formBuilder.group({
      name : [null, Validators.required],
      period : [null],
      city : [null, Validators.required],
      teacher : [[], Validators.required],
  });
}

  postCourse(form) {
    if (!form.period) {
      form.period = 8;
    }
    this.isLoadingResults = true;
    this.api.postCourse(form)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/curso/']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

  getTeacher() {
    this.api.getTeachers()
    .subscribe(res => {
      this.dataSource = res;
      this.teacher = this.dataSource.map((item: Teacher) => {
        const teacher = new Teacher();
        teacher.id = item.id;
        teacher.name = item.name;
        teacher.lastName = item.lastName;
        teacher.phd = item.phd;
        return teacher;
      });
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}
