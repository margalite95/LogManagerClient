import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateLogRequest } from '../DTO/Requests/create-log-request';
import { GetLogRequest } from '../DTO/Requests/get-log-request';

@Injectable({
  providedIn: 'root'
})
export abstract class CommService {

  constructor() { }

  abstract CreateLog(request: CreateLogRequest): Observable<any>
  abstract GetLog(request: GetLogRequest): Observable<any>
}
