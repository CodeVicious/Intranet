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

  search(query: string): Observable<User[]> {
    const params: string = [
      'column=surname',
      'sort=asc',
      'start=0',
      'length=10'
    ].join('&');


    const queryUrl = `${this.apiUrl}?${params}`;
    return this.http.get(queryUrl).map(response => {
      return <any>response['items'].map(item => {
        // console.log("raw item", item); // uncomment if you want to debug
        return new User({
          id: item.id,
          name: item.name,
          surname: item.surname,
          email: item.email,
          telephone: item.telephone,
          mobile: item.mobile
        });
      });
    });
  }
}
