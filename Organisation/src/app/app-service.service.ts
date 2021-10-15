import { Injectable, NgModule } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
@NgModule()

export class AppServiceService {
  url='https://fauna-api.herokuapp.com/api/create-organisation';
  OrganisationName:any;
  RegNo :any;
  DateOfReg:any;
  DirectorName:any;
  image:any;
  SourceOfFund:any;
  OfficeAddress:any;
  OrganisationType:any;
  
  constructor(private http:HttpClient) { }

  userGet(){
    return this.http.get(this.url);
  }
  savePost(data:any):Observable<any>{
   
    return this.http.post(this.url,data);
  }
}
