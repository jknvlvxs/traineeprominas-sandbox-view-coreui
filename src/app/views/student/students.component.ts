import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ApiService } from '../../../service/api.service';
import { Student } from '../../../model/student';

@Component({
  templateUrl: 'students.component.html',
  styleUrls: ['students.component.scss']
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'name', 'lastName', 'age', 'course', 'action'];
  dataSource: MatTableDataSource<Student>;

  isLoadingResults = true;

  constructor(private _api: ApiService) { }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {
    this._api.getStudents()
    .subscribe(res => {
      this.dataSource = new MatTableDataSource<Student>(res);
      res.forEach(i => {
      });
      this.dataSource.paginator = this.paginator;
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filterPredicate = (data, filter: string)  => {
      const accumulator = (currentTerm, key) => {
        return this.nestedFilterCheck(currentTerm, data, key);
      };
      const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
      // Transform the filter by converting it to lowercase and removing whitespace.
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) !== -1;
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  nestedFilterCheck(search, data, key) {
    if (typeof data[key] === 'object') {
      for (const k in data[key][0]) {
        if (k === 'name') {
          if (data[key][0][k] !== null) {
            search = this.nestedFilterCheck(search, data[key][0], k);
          }
        }
      }
    } else {
      search += data[key];
    }
    return search;
  }
}
