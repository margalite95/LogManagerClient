import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateLogComponent } from './CreateAndGetComponents/create-log/create-log.component';
import { GetLogComponent } from './CreateAndGetComponents/get-log/get-log.component';

const routes: Routes = [
  {path:'getLog',component:GetLogComponent},
  {path:'createLog',component:CreateLogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
