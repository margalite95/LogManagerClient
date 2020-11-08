import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AppResponseError } from '../DTO/Responses/app-response-error';
import { CommService } from './comm.service';
import{map} from 'rxjs/operators';
import { CreateLogResponsesOK } from '../DTO/Responses/CreateLogResponses/create-log-responses-ok';
import { CreateLogRequest } from '../DTO/Requests/create-log-request';

@Injectable({
  providedIn: 'root'
})
export class CreateLogService {

  constructor(private commService: CommService) { }
  responseSubjects: { [responseID: string]: Subject<any> } = {
    CreateLogResponsesOK: new Subject<CreateLogResponsesOK>(),
    AppResponseError: new Subject<AppResponseError>()
  }
  CreateLog(request: CreateLogRequest) {
    return this.commService.CreateLog(request).
      pipe(
        map(data => [data, this.responseSubjects[data.responseType]])
      ).subscribe(
        ([data, subject]) => subject.next(data),
        error => console.log("====>>>>", error)
      )
  }

  get onCreateLogResponsesOK() {
    return this.responseSubjects.CreateLogResponsesOK
  }

  get onResponseError() {
    return this.responseSubjects.AppResponseError
  }
}
