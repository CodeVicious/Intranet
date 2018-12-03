import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Role } from '../models/role';
import { catchError } from 'rxjs/operators';
import { Sector } from '../models/sector';


const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SectorsService {
  queryUrl: string;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    @Inject('API_URL') private apiUrl: string
  ) {
    this.queryUrl = `${this.apiUrl}/sector`;
  }

  /** fetch all the sectors */
  getSectors(): Observable<Sector[]> {

    return this.http.get<Sector[]>(`${this.queryUrl}/All`)
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
    this.messageService.add(`SectorService: ${message}`);
  }

}
