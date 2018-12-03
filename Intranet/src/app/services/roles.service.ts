import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Sector } from '../models/sector';
import { catchError } from 'rxjs/operators';
import { Role } from '../models/role';


const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  queryUrl: string;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    @Inject('API_URL') private apiUrl: string
  ) {
    this.queryUrl = `${this.apiUrl}/role`;
  }

  /** fetch all the roles */
  getRoles(): Observable<Role[]> {

    return this.http.get<Role[]>(`${this.queryUrl}/All`)
      .pipe(
        catchError(this.handleError('getRoles', []))
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
    this.messageService.add(`RoleService: ${message}`);
  }
}
