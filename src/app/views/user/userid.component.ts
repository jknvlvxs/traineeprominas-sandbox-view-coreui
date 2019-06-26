import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../service/api.service';

@Component({
  templateUrl: 'userid.component.html',
  styleUrls: ['userid.component.scss']
})
export class UserIdComponent implements OnInit {
  user: User = { id: 0, name: '', lastName: '', profile: ''};
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getUser(this.route.snapshot.params.id);
  }

  getUser(id) {
    this.api.getUser(id)
      .subscribe(data => {
        this.isLoadingResults = false;
        if (data) {
        this.user = data[0];
        }
      });
  }

  deleteUser(id) {
    this.isLoadingResults = true;
    this.api.deleteUser(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/usuario']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
