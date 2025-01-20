import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Assunto } from './assunto';

@Injectable({
  providedIn: 'root'
})
export class AssuntoService {
  private apiURL = "https://localhost:7212";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/assunto/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(autor: Assunto): Observable<any> {
    return this.httpClient.post(this.apiURL + '/assunto/', JSON.stringify(autor), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/assunto/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id: number, assunto: Assunto): Observable<any> {
    return this.httpClient.put(this.apiURL + '/assunto/' + id, JSON.stringify(assunto), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id: number) {
    return this.httpClient.delete(this.apiURL + '/assunto/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}\nDetails: ${error.error}`;
    }
    return throwError(() => errorMessage);
  }
}
