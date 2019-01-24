import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user';
import { catchError, tap } from 'rxjs/operators';
import { UserPerf } from '../../models/userperf';
import { MessageService } from '../../services/message.service';

const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json' })
};
@Injectable()
export class UserPerfService {

  queryUrl: string;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    @Inject('API_URL') private apiUrl: string
  ) {
    this.queryUrl = `${this.apiUrl}/performance`;
  }

  /** fetch all the users with pagination an filter */
  getUsers(query: string, column: string, order: string, pageIndex: number, pageSize: number): Observable<UserPerf[]> {
    const params: string = [
      `column=${column}`,
      `sort=${order}`,
      `start=${pageSize * (pageIndex - 1)}`,
      `length=${pageSize}`
    ].join('&');

    return this.http.get<UserPerf[]>(`${this.queryUrl}/All?${params}`)
      .pipe(
        catchError(this.handleError('getUsers', []))
      );
  }

  getUser(id: number): Observable<UserPerf> {
    return this.http.get<UserPerf>(`${this.queryUrl}/${id}`)
      .pipe(
        catchError(this.handleError<UserPerf>(`getUser id=${id}`))
      );
  }

  updateUser(user: UserPerf): Observable<any> {
    console.log(user);
    return this.http.put(
      `${this.queryUrl}/update/${user.id}`,
      user,
      httpOptions
    )
      .pipe(
        tap(_ => this.log(`updated uesr id=${user.id}`)),
        catchError(this.handleError<any>(`updateUser`))
      );
  }

  /** POST: add a new hero to the server */
  addUser(user: UserPerf): Observable<UserPerf> {
    return this.http.post<UserPerf>(
      `${this.queryUrl}/add`,
      user,
      httpOptions
    )
      .pipe(
        tap((user: UserPerf) => this.log(`added user w/ id=${user.id}`)),
        catchError(this.handleError<UserPerf>('addUser'))
      );
  }

  /** DELETE: delete the hero from the server */
  deleteUser(user: UserPerf | number): Observable<UserPerf> {
    const id = typeof user === 'number' ? user : user.id;
    return this.http.delete<UserPerf>(`${this.queryUrl}/delete/${id}`).pipe(
      tap(_ => console.debug(`deleted user id=${id}`)),
      catchError(this.handleError<UserPerf>('deleteUser'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      console.error(`${operation} failed: ${error.message}`); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`UserPerformanceService: ${message}`);
  }

}
