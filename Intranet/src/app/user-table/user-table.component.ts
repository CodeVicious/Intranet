import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import { merge, of as observableOf } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  id: number;
  name: string;
  surname: string;
  username: string;
  email: string;
  telephone: string;
  mobile: number;

  displayedColumns: string[] = ['id', 'name', 'surname', 'username', 'email', 'telephone', 'mobile', 'actions'];
  userService: UserService | null;
  data: User[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(private http: HttpClient, @Inject('API_URL') private apiUrl: string) { }

  ngOnInit() {

    this.userService = new UserService(this.http, this.apiUrl);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          // tslint:disable-next-line:no-non-null-assertion
          return this.userService!.getUsers
            ('', this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.length;

          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);




  }
}
