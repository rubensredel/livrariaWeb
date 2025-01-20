import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private apiURL = "https://localhost:7212";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/livro/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(livro: Livro): Observable<any> {
    return this.httpClient.post(this.apiURL + '/livro/', JSON.stringify(livro), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/livro/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id: number, livro: Livro): Observable<any> {
    return this.httpClient.put(this.apiURL + '/livro/' + id, JSON.stringify(livro), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id: number) {
    return this.httpClient.delete(this.apiURL + '/livro/' + id, this.httpOptions)
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
