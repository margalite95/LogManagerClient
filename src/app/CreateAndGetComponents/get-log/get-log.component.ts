import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetLogTypeService } from 'src/app/services/get-log-type.service';
import { GetLogService } from 'src/app/services/get-log.service';

@Component({
  selector: 'app-get-log',
  templateUrl: './get-log.component.html',
  styleUrls: ['/src/app/CreateAndGetComponents/createAndGetComponents.css']
})
export class GetLogComponent implements OnInit {
  TypesArray:Array<string>
  Result:string
  Message:string
  getForm: FormGroup

  constructor(private getLogService: GetLogService,
    private getLogTypeService:GetLogTypeService) {
   }

  ngOnInit(): void {
    
    this.TypesArray=this.getLogTypeService.GetLogType()
    this.getForm = new FormGroup({
      Destination: new FormControl('', [Validators.required]),
      LogName: new FormControl('', [Validators.required])     
    })
    this.getLogService.onGetLogResponseOK.subscribe(res=>{
      console.log(res)
      this.Result=res.logData
    })

    this.getLogService.onResponseError.subscribe(error => {
      console.log(error)
    })

    this.getLogService.onGetLogNotExistResponse.subscribe(error => {
      console.log(error)
      this.Message='This file does not exist'
    })
  }
  GetLog(){
    return this.getLogService.GetLog(
      {"LogType":this.getForm.value.Destination,"LogName":this.getForm.value.LogName}
      )}

}
