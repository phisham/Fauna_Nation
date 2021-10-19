import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {
  text="";
  msg="";
  test=false;
  test1=false;
  value=0;
  value1=0;
  form:FormGroup;
  constructor(private service:AppServiceService,private http:HttpClient,private fb:FormBuilder) {
      this.form=this.fb.group({
        doc:[null],
      })
  }

  ngOnInit(): void {
  }
  selectFile(event: any) {
    this.text="";
    this.msg=""; 
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select a file';
			return;
		}
		
	
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
	
		reader.onload = (_event) => {
			this.msg = "";
			this.text = event.target.files[0].name;
    
		}
    
    const file = event.target.files[0].toString();
    this.form.patchValue({
      doc: file
    });
    this.form.get('doc')?.updateValueAndValidity();
	}

  change(){
    this.test=!this.test;
    this.test1=false;
    if(this.test=true){
      this.value=1;
      this.value1=0;
    }
  }
  change1(){
    this.test1=!this.test1;
    this.test=false;
    if(this.test1=true){
      this.value1=1;
      this.value=0;
    }
  }

  getData(userform:any){
    const formdata:any=new FormData();
		
		formdata.append("DOB",this.service.DOB);
		formdata.append("WhatsAppNo",this.service.WhatsAppNo);
		formdata.append("AlternateNo",this.service.AlternateNo);
		formdata.append("ResAddress",this.service.ResAddress);
		formdata.append("BloodGroup",this.service.BloodGroup);
		
		formdata.append("EmName",this.service.EmName);
		formdata.append("EmRelation",this.service.EmRelation);
		
		formdata.append("EmNumber",this.service.EmNumber);
		formdata.append("Instagram",this.service.Instagram);
		formdata.append("FaceBook",this.service.FaceBook);
		formdata.append("YouTube",this.service.YouTube);
    formdata.append("LinkedIn",this.service.LinkedIn);
		formdata.append("RescuerOrganisation",this.service.RescuerOrganisation);
		formdata.append("Profession",this.service.Profession);
    formdata.append("Availability",this.service.Availability);
    formdata.append("Since",this.service.Since);
    formdata.append("PrevRescuedAnimals",this.service.PrevRescuedAnimals);
    formdata.append("Team",this.service.Team);
    formdata.append("Injury",userform.value.Injury);
    formdata.append("SnakeBite",this.test);
    formdata.append("NameOfSnake",userform.value.NameOfSnake);
    formdata.append("Documents",this.form.get('doc')?.value);
		formdata.append("image",this.service.image);
		//console.log(JSON.stringify(formdata));
		this.http.post('https://fauna-api.herokuapp.com/api/create-rescuer',formdata).subscribe((data)=>{
            console.log("working!!");
            console.log(data);
        }
		)
  
  }

}
