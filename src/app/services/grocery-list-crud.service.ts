import { HttpClient, HttpHeaders } from'@angular/common/http';
import { Injectable } from '@angular/core';

import { observable, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ErrorHandlerService } from './error-handler.service';

import { BtRearme} from '../models/Auto';
import { Motor } from '../models/Auto';
import { MotorAuto } from '../models/Motor';

@Injectable({
  providedIn: 'root',
})
export class GroceryListCrudService {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  private url = 'https://nodesqlclp.herokuapp.com/api';
  private urlrearme = 'https://nodesqlclp.herokuapp.com/rearme';
  //private urlretligado = 'http://localhost:3000/api';
  private urlfreq = 'https://nodesqlclp.herokuapp.com/freq';
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


  // eslint-disable-next-line @typescript-eslint/naming-convention
  SelectMotor(): Observable<Motor[]> {
    return this.http
      .get<Motor[]>(this.url, { responseType: 'json' })
      .pipe(
        tap((_) => console.log('')),
        catchError(
          this.errorHandlerService.handleError<Motor[]>('Select Motor', [])
        )
      );
  }

  selectteste(): Observable<MotorAuto>{
    return this.http
    .get<MotorAuto>(this.url);
  }


  selectrearme(): Observable<BtRearme[]> {
    return this.http
      .get<BtRearme[]>(this.urlrearme, { responseType: 'json' })
      .pipe(
        tap((_) => console.log(' ')),
        catchError(
          this.errorHandlerService.handleError<BtRearme[]>('', [])
        )
      );
  }
  ligarMotor(motor: Motor): Observable<any>{
    return this.http.put(this.url,motor,this.httpOptions)
    .pipe(catchError(this.errorHandlerService.handleError<any>('Update Ligar')));
  }

  btrearme(rearme: BtRearme): Observable<any>{
    console.log(rearme);
    return this.http
    .put<BtRearme>(this.urlrearme,rearme,this.httpOptions)
    .pipe(catchError(this.errorHandlerService.handleError<any>('')));
  }
  freqmanual(freqmanual: Motor): Observable<any>{
    return this.http.put(this.urlfreq,freqmanual,this.httpOptions);
  }
  selectMotorFreq(): Observable<any> {
    return this.http.get(this.urlfreq, { responseType: 'json' });
  }
//select tb_automatico
}

