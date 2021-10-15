import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.css']
})
export class NextpageComponent implements OnInit {
  value=true;
  value1=true
  value2=true;
  value3=true;
  value4=true;
  value5=true;
  value6=true;
  color=true;
  color1=true;
  color2=true;
  color3=true;
  color4=true;
  color5=true;
  color6=true;
  count:number=1;
  orglist:any=["organization1","organization2","etc..."];
  constructor(private service:AppServiceService ,private router:Router) { }

  ngOnInit(): void {
  }
  change(){
    this.color=!this.color;
    this.value=!this.value;
  }
  change1(){
    this.color1=!this.color1;
    this.value1=!this.value1;
  }
  change2(){
    this.color2=!this.color2;
    this.value2=!this.value2;
  }
  change3(){
    this.color3=!this.color3;
    this.value3=!this.value3;
  }
  change4(){
    this.color4=!this.color4;
    this.value4=!this.value4;
  }
  change5(){
    this.color5=!this.color5;
    this.value5=!this.value5;
  }
  change6(){
    this.color6=!this.color6;
    this.value6=!this.value6;
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

  getData(userform:any){
      console.log(userform.value.Profession);
      this.service.RescuerOrganisation=userform.value.RescuerOrganisation;
      this.service.Profession=userform.value.Profession;
      this.service.Availability=userform.value.AvailDay+ '  ' +userform.value.AvailTimeFrm +'to' + userform.value.AvailTimeTo;
      this.service.Since=userform.value.Since;
      this.service.PrevRescuedAnimals=userform.value.PrevRescuedAnimals;
      this.service.Team=this.count;
      
      if(this.value==true){
          this.service.Availability=this.service.Availability.concat(" Saturday ");
      }
      if(this.value1==true){
          this.service.Availability=this.service.Availability.concat(" Sunday ");
      }
      if(this.value2==true){
          this.service.Availability=this.service.Availability.concat(" Monday ");
      }
      if(this.value3==true){
          this.service.Availability=this.service.Availability.concat(" Tuesday ");
      }
      if(this.value4==true){
          this.service.Availability=this.service.Availability.concat(" Wednesday ");
      }
      if(this.value5==true){
          this.service.Availability=this.service.Availability.concat(" Thursday ");
      }
      if(this.value6==true){
          this.service.Availability=this.service.Availability.concat(" Friday ");
      }
      //[value]="value?'Saturday':''"
      if(userform.valid){
	      this.router.navigate(['final'])
		  }

  }

}
