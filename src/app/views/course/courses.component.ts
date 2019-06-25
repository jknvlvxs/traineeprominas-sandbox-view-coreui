import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ApiService } from '../../../service/api.service';
import { Course } from '../../../model/course';

@Component({
  templateUrl: 'courses.component.html',
  styleUrls: ['courses.component.scss']
})
export class CoursesComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'name', 'period', 'city', 'teacher', 'action'];
  dataSource: MatTableDataSource<Course>;
  isLoadingResults = true;

  constructor(private _api: ApiService) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this._api.getCourses()
    .subscribe(res => {
      this.dataSource = new MatTableDataSource<Course>(res);
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
      for (let i = 0; i < data[key].length; i++) {
        for (const k in data[key][i]) {
          if (k === 'name') {
            if (data[key][i][k] !== null) {
              search = this.nestedFilterCheck(search, data[key][i], k);
            }
          }
        }
      }
    } else {
      search += data[key];
    }
    return search;
  }
}
