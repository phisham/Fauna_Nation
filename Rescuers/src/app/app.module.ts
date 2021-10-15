import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NextpageComponent } from './nextpage/nextpage.component';
import { FinalComponent } from './final/final.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppServiceService } from './app-service.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NextpageComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppServiceService
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
