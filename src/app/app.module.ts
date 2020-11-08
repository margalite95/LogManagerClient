import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HttpCommService } from './services/http-comm.service';
import { CommService } from './services/comm.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetLogComponent } from './CreateAndGetComponents/get-log/get-log.component';
import { CreateLogComponent } from './CreateAndGetComponents/create-log/create-log.component';

@NgModule({
  declarations: [
    AppComponent,
    GetLogComponent,
    CreateLogComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [{ provide: CommService, useClass: HttpCommService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
