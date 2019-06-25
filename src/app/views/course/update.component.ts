import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../../service/api.service';
import { Teacher } from '../../../model/teacher';

@Component({
  templateUrl: 'update.component.html',
  styleUrls: ['update.component.scss']
})
export class UpdateComponent implements OnInit {
  dataSource: Teacher[];
  id = 0;
  courseForm: FormGroup;
  name = '';
  period = 0;
  city = '';
  teacher: Teacher[];
  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getCourse(this.route.snapshot.params.id);
    this.getTeacher();
    this.courseForm = this.formBuilder.group({
      name : [null, Validators.required],
      period : [null],
      city : [null, Validators.required],
      teacher : [[]],
    });
 }

 getCourse(id) {
  this.api.getCourse(id).subscribe(data => {
    this.id = data[0].id;
    this.courseForm.setValue({
      name: data[0].name,
      period: data[0].period,
      city: data[0].city,
      teacher: data[0].teacher
    });
  });
}

putCourse(form) {
  if (!form.period) {
    form.period = 8;
  }
  this.isLoadingResults = true;
  this.api.putCourse(this.id, form)
    .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/course/' + this.id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
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
