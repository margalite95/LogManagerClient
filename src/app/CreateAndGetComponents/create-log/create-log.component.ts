import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateLogService } from 'src/app/services/create-log.service';
import { GetLogTypeService } from 'src/app/services/get-log-type.service';

@Component({
  selector: 'app-create-log',
  templateUrl: './create-log.component.html',
  styleUrls: ['/src/app/CreateAndGetComponents/createAndGetComponents.css']
})
export class CreateLogComponent implements OnInit {
  TypesArray:Array<string>
  createForm: FormGroup
  Result:string
  constructor(private createLogService: CreateLogService,
    private getLogTypeService:GetLogTypeService) { 
  }

  ngOnInit(): void {
      this.TypesArray=this.getLogTypeService.GetLogType()
      this.createForm = new FormGroup({
      Destination: new FormControl('', [Validators.required]),
      LogData: new FormControl('', [Validators.required])     
    })
    this.createLogService.onCreateLogResponsesOK.subscribe(res=>{
      console.log(res)
      this.Result='Logs created successfully'
    })

    this.createLogService.onResponseError.subscribe(error => {
      console.log(error)
    })
  }
  CreateLog(){
    debugger
    return this.createLogService.CreateLog(
      {"LogType":this.createForm.value.Destination,"LogData":this.createForm.value.LogData}

      )}
}
