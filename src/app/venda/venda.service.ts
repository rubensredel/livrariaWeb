import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Venda } from './venda';

@Injectable({
  providedIn: 'root'
})
export class VendaService {
  private apiURL = "https://localhost:7212";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/venda/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(venda: Venda): Observable<any> {
    return this.httpClient.post(this.apiURL + '/venda/', JSON.stringify(venda), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/venda/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id: number, venda: Venda): Observable<any> {
    return this.httpClient.put(this.apiURL + '/venda/' + id, JSON.stringify(venda), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id: number) {
    return this.httpClient.delete(this.apiURL + '/venda/' + id, this.httpOptions)
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
