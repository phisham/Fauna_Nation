import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalComponent } from './final/final.component';
import { HomeComponent } from './home/home.component';
import { NextpageComponent } from './nextpage/nextpage.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  {
    component:HomeComponent,
    path:"home"
  },
  {
    component:NextpageComponent,
    path:"next"
  },
  {
    component:FinalComponent,
    path:"final"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
