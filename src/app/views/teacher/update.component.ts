import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../../service/api.service';

@Component({
  templateUrl: 'update.component.html',
  styleUrls: ['update.component.scss']
})
export class UpdateComponent implements OnInit {
  id = 0;
  teacherForm: FormGroup;
  name = '';
  lastName = '';
  phd = '';
  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getTeacher(this.route.snapshot.params.id);
    this.teacherForm = this.formBuilder.group({
   name : [null, Validators.required],
   lastName : [null, Validators.required],
   phd : [null, Validators.required]
 });
 }

 getTeacher(id) {
  this.api.getTeacher(id).subscribe(data => {
    this.id = data[0].id;
    this.teacherForm.setValue({
      name: data[0].name,
      lastName: data[0].lastName,
      phd: data[0].phd
    });
  });
}

putTeacher(form: NgForm) {
  this.isLoadingResults = true;
  this.api.putTeacher(this.id, form)
    .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/teacher/' + this.id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
}
}
