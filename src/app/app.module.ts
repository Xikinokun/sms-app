import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SmsListComponent } from './sms-list/sms-list.component';
import { SmsDetailsComponent } from './sms-details/sms-details.component';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SmsListComponent,
    SmsDetailsComponent
  ],
  exports: [SmsListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
