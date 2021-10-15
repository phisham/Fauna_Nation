import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NextpageComponent } from './nextpage/nextpage.component';
import { StepupComponent } from './stepup/stepup.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material/material.module';
import { AppServiceService } from './app-service.service';
@NgModule({
  declarations: [
    AppComponent,
    NextpageComponent,
    StepupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppServiceService
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
