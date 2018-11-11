import {Injectable, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {User} from '../models/user';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class UserService {
  constructor(
    private http: HttpClient,
    @Inject('API_URL') private apiUrl: string
  ) {}

  getUsers(query: string, column: string, order: string, pageIndex: number, pageSize: number): Observable<User[]> {
    const params: string = [
      `column=${column}`,
      `sort=${order}`,
      `start=${pageSize * (pageIndex - 1)}`,
      `length=${pageSize}`
    ].join('&');


    const queryUrl = `${this.apiUrl}/user/All?${params}`;
    return this.http.get<User[]>(queryUrl)
      .pipe(
      catchError(this.handleError('getHeroes', []))
      );
  }

  /** DELETE: delete the hero from the server */
  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const queryUrl = `${this.apiUrl}/user/delete//${id}`;

    return this.http.delete<User>(queryUrl).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<User>('deleteHero'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      return Observable.throw(error.json().error());
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      //return of(result as T);
    };
  }

}
