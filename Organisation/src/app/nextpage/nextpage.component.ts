import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { StepupComponent } from '../stepup/stepup.component';
import { HttpClient } from '@angular/common/http';
import { AppServiceService } from '../app-service.service';
@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.css']
})
export class NextpageComponent implements OnInit {
  domainlist:any=['Domestic','StreetAnimal','Snakes','WildAnimal'];
  centrelist:any=['Rescue Centre','Transit Centre'];
  availabilitylist:any=['Regular','Visiting','OnCar'];
  rescuers:number=1;
  count:number=0;
  count1:number=0;
  OrganisationName!:any;
  RegNo :any;
  DateOfReg:any;
  DirectorName:any;
  image:any;
  SourceOfFund:any;
  OfficeAddress:any;
  OrganisationType:any;
  

  constructor(private router:Router ,private http:HttpClient, private step:AppServiceService) {
  
  }
  ngOnInit(): void {
  }
  
  add(){
    this.rescuers++;
    
    
  }
  minus(){
    if(this.count!=0){
      this.count--;
    }
  }
  plus(){
    if(this.count!=100){
      this.count++;
    }
  }
  minus1(){
    if(this.count1!=0){
      this.count1--;
    }
  }
  plus1(){
    if(this.count1!=100){
      this.count1++;
    }
  }

  getUserData(userform:any){
    const formdata:any=new FormData();
		console.log(this.step.DateOfReg);
		formdata.append("OrganisationName",this.step.OrganisationName);
		formdata.append("RegNo",this.step.RegNo);
		formdata.append("DateOfReg",this.step.DateOfReg);
		formdata.append("DirectorName",this.step.DirectorName);
		formdata.append("image",this.step.image);
		formdata.append("SourceOfFund",this.step.SourceOfFund);
		formdata.append("OfficeAddress",this.step.OfficeAddress);
		formdata.append("OrganisationType",this.step.OrganisationType);
		formdata.append("RescueDomain",userform.value.RescueDomain);
		formdata.append("RCentreAdd",userform.value.RCentreAdd);
		formdata.append("TypeOfCenter",userform.value.TypeOfCentre);
		formdata.append("NoOfAnimals",this.count);
		formdata.append("NoOfDays",this.count1);
		formdata.append("DrAvailability",userform.value.DrAvailability);
		formdata.append("NoOfRescuers",this.rescuers);
		console.log(userform.value);
		//console.log(JSON.stringify(formdata));
		this.http.post('https://fauna-api.herokuapp.com/api/create-organisation',formdata).subscribe((data)=>{
            console.log("working!!");
            console.log(data);
        }
		)
  }

}
