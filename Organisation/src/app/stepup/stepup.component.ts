import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AppServiceService } from '../app-service.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-stepup',
  templateUrl: './stepup.component.html',
  styleUrls: ['./stepup.component.css']
})
export class StepupComponent implements OnInit {
  form:FormGroup;
  value:number=1;
  url:any;
  msg="";
  users:any;
  name:any;


  orglist:any=['Government','NGO','Private'];
  constructor(public fb:FormBuilder, private http:HttpClient,private router:Router, private service:AppServiceService){
	  this.form=this.fb.group({
			img:[null],
			name:this.name,
			RegNo:[4],
			date:[''],
			Dirname:[''],
			SourceFund:[''],
			OffAdd:[''],
			Orgtype:[''],
			ResDomain:[''],
			Rcadd:[''],
			typeofcntr:[''],
			animls:[3],
			days:[4],
			avail:[''],
			resc:[5],
	  })
  }

  ngOnInit(): void {
  }
  i=1;
	plus(){
		this.value=this.i+1;
	}
 
 
  

    selectFile(event: any) { 
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}

		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
		}
		console.log(reader.result?.toString());
		const file = event.target.files[0];
    	this.form.patchValue({
      			img: file
    	});
    	this.form.get('img')?.updateValueAndValidity();
	}

	getUserData(userform:any){

		this.service.OrganisationName=userform.value.OrganisationName;
		this.service.RegNo=userform.value.RegNo;
		this.service.DateOfReg=userform.value.DateOfReg;
		this.service.DirectorName=userform.value.DirectorName;
		this.service.image=this.form.get('img')?.value;
		this.service.SourceOfFund=userform.value.SourceOfFund;
		this.service.OfficeAddress=userform.value.OfficeAddress;
		this.service.OrganisationType=userform.value.OrganisationType;
		//console.warn(this.form.get('RegNo')?.value);
		/*const formdata:any=new FormData();
		console.log(userform.value.OrganisationName);
		formdata.append("OrganisationName",userform.value.OrganisationName);
		formdata.append("RegNo",userform.value.RegNo);
		formdata.append("DateOfReg",userform.value.DateOfReg);
		formdata.append("DirectorName",userform.value.DirectorName);
		formdata.append("image",this.form.get('img')?.value);
		formdata.append("SourceOfFund",userform.value.SourceOfFund);
		formdata.append("OfficeAddress",userform.value.OfficeAddress);
		formdata.append("OrganisationType",userform.value.OrganisationType);
		formdata.append("RescueDomain",'hii');
		formdata.append("RCentreAdd",'hii');
		formdata.append("TypeOfCenter",'hii');
		formdata.append("NoOfAnimals",userform.value.RegNo);
		formdata.append("NoOfDays",userform.value.RegNo);
		formdata.append("DrAvailability",'hii');
		formdata.append("NoOfResuers",6);
		
		//console.log(JSON.stringify(formdata));
		this.http.post('https://fauna-api.herokuapp.com/api/create-organisation',formdata).subscribe((data)=>{
            console.log("working!!");
            console.log(data);
        }
		)*/
		if(userform.valid){
			this.router.navigate(['nextpage'],{
				state:{OrganisationName:userform.value.OrganisationName ,DateOfReg:userform.value.DateOfReg, DirectorName:userform.value.DirectorName, image:this.form.get('img')?.value, SourceOfFund:userform.value.SourceOfFund, OfficeAddress:userform.value.OfficeAddress, OrganisationType:userform.value.OrganisationType}
			})
		}
	}


}
