import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../../service/api.service';
import { Course } from '../../../model/course';

@Component({
  templateUrl: 'create.component.html',
  styleUrls: ['create.component.scss']
})
export class CreateComponent implements OnInit {
  dataSource: Course[];
  studentForm: FormGroup;
  name = '';
  lastName = '';
  age = 0;
  course: Course[];
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getCourse();
    this.studentForm = this.formBuilder.group({
      name : [null, Validators.required],
      lastName : [null, Validators.required],
      age : [null, Validators.required],
      course : [[], Validators.required],
  });
}

  postStudent(form: NgForm) {
    this.isLoadingResults = true;
    this.api.postStudent(form)
      .subscribe(res => {
          // const id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/student'/*, id*/]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

  getCourse() {
    this.api.getCourses()
    .subscribe(res => {
      this.dataSource = res;
      this.course = this.dataSource.map((item: Course) => {
        const course = new Course();
        course.id = item.id;
        course.name = item.name;
        course.period = item.period;
        course.city = item.city;
        course.teacher = item.teacher;
        return course;
      });
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}
