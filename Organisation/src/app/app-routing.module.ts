import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NextpageComponent } from './nextpage/nextpage.component';
import { StepupComponent } from './stepup/stepup.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/stepup',pathMatch:'full'
  },
  {
    component:NextpageComponent,
    path:"nextpage"
  },
  {
    component:StepupComponent,
    path:"stepup"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
