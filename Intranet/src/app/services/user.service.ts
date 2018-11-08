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

  getUsers(query: string, sort: string, order: string, page: number): Observable<User[]> {
    const params: string = [
      'column=surname',
      'sort=asc',
      'start=0',
      'length=10'
    ].join('&');


    const queryUrl = `${this.apiUrl}/user/All?${params}`;
    return this.http.get<User[]>(queryUrl);
  }
}
