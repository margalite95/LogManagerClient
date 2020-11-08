import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AppResponseError } from '../DTO/Responses/app-response-error';
import { CommService } from './comm.service';
import{map} from 'rxjs/operators';
import { GetLogResponseOK } from '../DTO/Responses/GetLogResponse/get-log-response-ok';
import { GetLogRequest } from '../DTO/Requests/get-log-request';
import { GetLogNotExistResponse } from '../DTO/Responses/GetLogResponse/get-log-not-exist-response';

@Injectable({
  providedIn: 'root'
})
export class GetLogService {

  constructor(private commService: CommService) { }
  responseSubjects: { [responseID: string]: Subject<any> } = {
    GetLogResponseOK: new Subject<GetLogResponseOK>(),
    GetLogNotExistResponse:new Subject<GetLogNotExistResponse>(),
    AppResponseError: new Subject<AppResponseError>()
  }
  GetLog(request: GetLogRequest) {
    return this.commService.GetLog(request).
      pipe(
        map(data => [data, this.responseSubjects[data.responseType]])
      ).subscribe(
        ([data, subject]) => subject.next(data),
        error => console.log("====>>>>", error)
      )
  }

  get onGetLogNotExistResponse() {
    return this.responseSubjects.GetLogNotExistResponse
  }
  get onGetLogResponseOK() {
    return this.responseSubjects.GetLogResponseOK
  }
  get onResponseError() {
    return this.responseSubjects.AppResponseError
  }
}
