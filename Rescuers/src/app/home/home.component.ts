import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import { from } from 'rxjs';
import { AppServiceService } from '../app-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form:FormGroup;
  show:boolean=false;
  show1:boolean=false;
  show2:boolean=false;
  show3:boolean=false;
  done:boolean=false;
  value=1;
  value1=1;
  value2=1;
  value3=1;
  msg="";
  text:any="";
  filename:any;
  
  constructor(private fb:FormBuilder,public service:AppServiceService,private router:Router) { 
    this.form=this.fb.group({
      img:[null],
    })
  }

  webform=new FormGroup({
    
    whatsappNumber: new FormControl('',Validators.required),
    alternateNumber: new FormControl('',Validators.required),
    contactNumber: new FormControl('',Validators.required),
    
  })
  ngOnInit(): void {
  }
  press(){
    this.show=true;
    if(this.value1==1){
      this.show1=false;
    }
    if(this.value2==1){
      this.show2=false;
    }
    if(this.value3==1){
      this.show3=false;
    }
  }
  press1(){
    this.show1=true;
    if(this.value==1){
      this.show=false;
    }
    if(this.value2==1){
      this.show2=false;
    }
    if(this.value3==1){
      this.show3=false;
    }

  }
  press2(){
    this.show2=true;
    if(this.value==1){
      this.show=false;
    }
    if(this.value1==1){
      this.show1=false;
    }
    if(this.value3==1){
      this.show3=false;
    }
  }
  press3(){
    this.show3=true;
    if(this.value==1){
      this.show=false;
    }
    if(this.value1==1){
      this.show1=false;
    }
    if(this.value2==1){
      this.show2=false;
    }
  }
  fix(){
    this.show=true;
    this.value=0;
  }
  fix1(){
    this.show1=true;
    this.value1=0;
  }
  fix2(){
    this.show2=true;
    this.value2=0;
  }
  fix3(){
    this.show3=true;
    this.value3=0;
  }
  selectFile(event: any) {
    this.text="";
    this.msg=""; 
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
		reader.readAsBinaryString(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.text = event.target.files[0].name;
		}
    const file = event.target.files[0];
    this.form.patchValue({
      img: file
    });
    this.form.get('img')?.updateValueAndValidity();

	}

  getData(userform:any){
      console.log(userform.value.WhatsAppNo);
      this.service.DOB=userform.value.DOB;
      this.service.WhatsAppNo=userform.value.WhatsAppNo;
      this.service.AlternateNo=userform.value.AlternateNo;
      this.service.ResAddress=userform.value.ResAddress;
      this.service.BloodGroup=userform.value.BloodGroup;
      this.service.EmName=userform.value.EmName;
      this.service.EmNumber=userform.value.EmNumber;
      this.service.EmRelation=userform.value.EmRelation;
      this.service.Instagram=userform.value.Instagram;
      this.service.FaceBook=userform.value.FaceBook;
      this.service.YouTube=userform.value.YouTube;
      this.service.LinkedIn=userform.value.LinkedIn;
      this.service.image=this.form.get('img')?.value;

    /*const formdata:any=new FormData();
		
		formdata.append("DOB",'22/10/2020');
		formdata.append("WhatsAppNo",'9897363737');
		formdata.append("AlternateNo",'859598585687');
		formdata.append("ResAddress",'Address');
		formdata.append("BloodGroup",'A');
		
		formdata.append("EmName",'Hisham');
		formdata.append("EmRelation",'Relatn');
		
		formdata.append("EmNumber",'hiii');
		formdata.append("Instagram",'helooo');
		formdata.append("FaceBook",'hsjoj');
		formdata.append("YouTube",'sndxndn');
    formdata.append("LinkedIn",'jdsjdj');
		formdata.append("RescuerOrganisation",'shdjdj');
		formdata.append("Profession",'shdsjdxn');
    formdata.append("Availability",'sasndn');
    formdata.append("Since",'dhccn');
    formdata.append("PrevRescuedAnimals",'xdxcnn');
    formdata.append("Team",userform.value.WhatsAppNo);
    formdata.append("Injury",'sjsdjdm');
    formdata.append("SnakeBite",true);
    formdata.append("NameOfSnake",userform.value.WhatsAppNo);
    formdata.append("Documents",userform.value.WhatsAppNo);
		formdata.append("image",this.form.get('img')?.value);
		//console.log(JSON.stringify(formdata));
		this.http.post('https://fauna-api.herokuapp.com/api/create-rescuer',formdata).subscribe((data)=>{
            console.log("working!!");
            console.log(data);
        }
		)
    */

    if(userform.valid){
			this.router.navigate(['next'])
		}

  }
}
