import { Shule} from './shule/shule';
import { SCHOOLS } from './shule/mock-schools';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShuleService {

  private schoolsUrl = 'api/schools';  // URL to web api

  constructor(private http: HttpClient,
    private messagesService: MessagesService) { }

//get schools from the server

  getSchools(): Observable<Shule[]> {
     this.messagesService.add('ShuleService: fetched schools');
        return this.http.get<Shule[]>(this.schoolsUrl).pipe(tap(_ => this.log('fetched schools')),
      catchError(this.handleError<Shule[]>('getSchools', []))
    );
  }
/** GET school by id. Will 404 if id not found */
  getShule(id: number): Observable<Shule> {
    const url = `${this.schoolsUrl}/${id}`;
  return this.http.get<Shule>(url).pipe(
    tap(_ => this.log(`fetched school id=${id}`)),
    catchError(this.handleError<Shule>(`getShule id=${id}`))
  );
  }

  /** PUT: update the school on the server */
updateSchool(shule: Shule): Observable<any> {
  return this.http.put(this.schoolsUrl, shule, this.httpOptions).pipe(
    tap(_ => this.log(`updated school id=${shule.id}`)),
    catchError(this.handleError<any>('updateSchool'))
  );
}

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


/** POST: add a new school to the server */
addSchool(shule: Shule): Observable<Shule> {
  return this.http.post<Shule>(this.schoolsUrl, shule, this.httpOptions).pipe(
    tap((newSchool: Shule) => this.log(`added school w/ id=${newSchool.id}`)),
    catchError(this.handleError<Shule>('addSchool'))
  );
}

/** DELETE: delete the hero from the server */
deleteShule(id: number): Observable<Shule> {
  const url = `${this.schoolsUrl}/${id}`;
  return this.http.delete<Shule>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted school id=${id}`)),
    catchError(this.handleError<Shule>('deleteSchool'))
  );
}

/* GET school whose name contains search term */
searchSchools(term: string): Observable<Shule[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Shule[]>(`${this.schoolsUrl}/?school_name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found schools matching "${term}"`) :
       this.log(`no schools matching "${term}"`)),
    catchError(this.handleError<Shule[]>('searchSchools', []))
  );
}


/**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



      /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messagesService.add(`ShuleService: ${message}`);
}
}
