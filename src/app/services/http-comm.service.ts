import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommService } from './comm.service';
import { HttpClient } from '@angular/common/http';
import { CreateLogRequest } from '../DTO/Requests/create-log-request';
import { GetLogRequest } from '../DTO/Requests/get-log-request';

@Injectable({
  providedIn: 'root'
})
export class HttpCommService implements CommService{

  constructor(private httpClient: HttpClient) { }

  CreateLog(request: CreateLogRequest): Observable<any> {
    console.log(request)
    return this.httpClient.post('https://localhost:44342/api/LogManager/CreateLog', request);
  }
  GetLog(request: GetLogRequest): Observable<any> {
    return this.httpClient.post('https://localhost:44342/api/LogManager/GetLog', request);
  }
}
