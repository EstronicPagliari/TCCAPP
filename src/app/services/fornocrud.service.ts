import { HttpClient, HttpHeaders } from'@angular/common/http';
import { Injectable } from '@angular/core';

import { observable, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Forno,Etapaatual,Posicao } from '../models/Forno';

import { ErrorHandlerService } from './error-handler.service';




@Injectable({
  providedIn: 'root',
})
export class FornoCrud {

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private http: HttpClient
  ) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  httpOptions: { headers: HttpHeaders } = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  selectReceita(): Observable<Forno[]> {
    const url = `https://nodesqlclp.herokuapp.com/forno`;
    return this.http.get<Forno[]>(url, { responseType: 'json' });
  }

  selectEtapaAtual(): Observable<Etapaatual[]> {
    const url = `https://nodesqlclp.herokuapp.com/forno/etapaatual`;
    return this.http.get<Etapaatual[]>(url, { responseType: 'json' });
  }

  selectPosicao(): Observable<Posicao[]> {
    const url = `https://nodesqlclp.herokuapp.com/posicao`;
    console.log('teste');
    return this.http.get<Posicao[]>(url, { responseType: 'json' });
  }
  selectBuscarPosicao(): Observable<Posicao[]> {
    const url = `http://localhost:3000/posicao/buscaposicao`;
    console.log('teste');
    return this.http.get<Posicao[]>(url, { responseType: 'json' });
  }


}
