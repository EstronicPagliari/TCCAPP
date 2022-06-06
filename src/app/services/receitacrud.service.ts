import { HttpClient, HttpHeaders } from'@angular/common/http';
import { Injectable } from '@angular/core';

import { observable, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ErrorHandlerService } from './error-handler.service';

import { Receita, receitateste } from '../models/receita';


@Injectable({
  providedIn: 'root',
})
export class ReceitaCrud {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public numeroid: number;
  private url = 'https://nodesqlclp.herokuapp.com/receita';
  private urlinsert = 'https://nodesqlclp.herokuapp.com/receita';
  private urlreceitaid = 'https://nodesqlclp.herokuapp.com/receitaid';
  // eslint-disable-next-line @typescript-eslint/naming-convention

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(
    private errorHandlerService: ErrorHandlerService,
    private http: HttpClient
  ) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  httpOptions: { headers: HttpHeaders } = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  selectReceita(): Observable<Receita[]> {
    return this.http.get<Receita[]>(this.urlinsert, { responseType: 'json' });
  }

  deletereceita(id: number): Observable<any> {
    const url = `https://nodesqlclp.herokuapp.com/receita/${id}`;
    return this.http
      .delete<Receita>(url, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>('delete')));
  }

  criarreceita(receita: receitateste ): Observable<receitateste>{
    const url = `https://nodesqlclp.herokuapp.com/receita`;
    console.log('function insert', receita);
    return this.http.post<receitateste>(this.url,receita,this.httpOptions)
    .pipe(
      catchError(this.errorHandlerService.handleError<Receita>('create post')));
  }

  selectReceitaid(): Observable<Receita[]> {
    return this.http.get<Receita[]>(this.urlreceitaid, {responseType: 'json' });
  }

  selectReceitaCarregada(): Observable<Receita[]> {
    const url = `https://nodesqlclp.herokuapp.com/receitaid/receitacarregada`;
    return this.http.get<Receita[]>(url,{responseType: 'json' });
  }

  selectreceitaidteste(id: number): Observable<Receita[]>{
    const url = `https://nodesqlclp.herokuapp.com/receitaid/${id}`;
    return this.http.get<Receita[]>(url,{ responseType: 'json' } );
  }










}
