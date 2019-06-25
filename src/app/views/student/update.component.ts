import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../../service/api.service';
import { Course } from '../../../model/course';

@Component({
  templateUrl: 'update.component.html',
  styleUrls: ['update.component.scss']
})
export class UpdateComponent implements OnInit {
  dataSource: Course[];
  id = 0;
  studentForm: FormGroup;
  name = '';
  lastName = '';
  age = 0;
  course: Course[];
  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getStudent(this.route.snapshot.params.id);
    this.getCourse();
    this.studentForm = this.formBuilder.group({
      name : [null, Validators.required],
      lastName : [null, Validators.required],
      age : [null, Validators.required],
      course : [[]],
    });
 }

 getStudent(id) {
  this.api.getStudent(id).subscribe(data => {
    this.id = data[0].id;
    this.studentForm.setValue({
      name: data[0].name,
      lastName: data[0].lastName,
      age: data[0].age,
      course: data[0].course
    });
  });
}

putStudent(form: NgForm) {
  this.isLoadingResults = true;
  this.api.putStudent(this.id, form)
    .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/student/' + this.id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
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
