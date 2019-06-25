import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../../service/api.service';

@Component({
  templateUrl: 'create.component.html',
  styleUrls: ['create.component.scss']
})
export class CreateComponent implements OnInit {
  teacherForm: FormGroup;
  name = '';
  lastName = '';
  phd = false;
  isLoadingResults = false;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
     this.teacherForm = this.formBuilder.group({
    name : [null, Validators.required],
    lastName : [null, Validators.required],
    phd : [null, Validators.required]
  });
  }

  postTeacher(form: NgForm) {
    this.isLoadingResults = true;
    this.api.postTeacher(form)
      .subscribe(res => {
          // const id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/teacher'/*, id*/]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }
}
