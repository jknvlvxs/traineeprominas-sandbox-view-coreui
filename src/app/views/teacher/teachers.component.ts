import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ApiService } from '../../../service/api.service';
import { Teacher } from '../../../model/teacher';

@Component({
  templateUrl: 'teachers.component.html',
  styleUrls: ['teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'name', 'lastName', 'phd', 'action'];
  dataSource: MatTableDataSource<Teacher>;
  isLoadingResults = true;

  constructor(private _api: ApiService) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this._api.getTeachers()
    .subscribe(res => {
      this.dataSource = new MatTableDataSource<Teacher>(res);
      this.dataSource.paginator = this.paginator;
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
