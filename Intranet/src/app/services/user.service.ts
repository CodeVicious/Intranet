import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class UserService {
  constructor(
    private http: HttpClient,
    @Inject('API_URL') private apiUrl: string
  ) { }

  getUsers(query: string, column: string, order: string, pageIndex: number, pageSize: number): Observable<User[]> {
    const params: string = [
      `column=${column}`,
      `sort=${order}`,
      `start=${pageSize * (pageIndex - 1)}`,
      `length=${pageSize}`
    ].join('&');


    const queryUrl = `${this.apiUrl}/user/All?${params}`;
    return this.http.get<User[]>(queryUrl);
  }
}
