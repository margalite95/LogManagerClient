import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetLogTypeService {
  TypesArray:Array<string>
  constructor() {
    this.TypesArray=new Array<string>()
    this.TypesArray.push("DB")
    this.TypesArray.push("File")
   }
   ngOnInit(){
   }
   GetLogType(){
     return this.TypesArray
   }
}
