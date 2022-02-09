import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DataServicesService } from '../data-services.service';

@Component({
  selector: 'app-resumeform',
  templateUrl: './resumeform.component.html',
  styleUrls: ['./resumeform.component.css']
})
export class ResumeformComponent implements OnInit {

  skill:FormArray;
  technical:FormArray;
  skillControl:FormArray;
  experience:FormArray;
  resumeForm:FormGroup;
  resumeData:any;
  constructor(private formgroup:FormBuilder,private dataservice:DataServicesService,private router:Router) { 

  }

  ngOnInit(): void {
    this.resumeForm = this.createForm();
    this.addSkill();
    this.addTechnical();
    this.addExeperience();
   }
  createForm():FormGroup{
   return this.formgroup.group({
      name:['',Validators.required],
      designation:[''],
      email:['',Validators.email],
      number:[''],
      profile:[''],
      skill:this.formgroup.array([]),
      technical:this.formgroup.array([]),
      experience:this.formgroup.array([]),
      education:[''],
      educationDescription:[''],
    })
  }
  //get controls of skill array
  skillfield():FormGroup{
    return this.formgroup.group({
      skills:[''],
      skilldetails:[''],
    })
  }
  //add more skill field into fromgroup
  addSkill(){   
    this.skill = this.resumeForm.get('skill') as FormArray;
    this.skill.push(this.skillfield());
 }

 //get Technial field controls
 technicalField():FormGroup{
  return this.formgroup.group({
    technical:[''],
  })
}
//submit control into arry
addTechnical(){
  this.technical = this.resumeForm.get('technical') as FormArray;
  this.technical.push(this.technicalField());
}
//get Technial field controls
exeperienceField():FormGroup{
  return this.formgroup.group({
    company:[''],
    designationInCompany:[''],
    detailscompny:[],
  })
}
//submit control into arry
addExeperience(){
  this.experience = this.resumeForm.get('experience') as FormArray;
  this.experience.push(this.exeperienceField());
}
//create subject for send data 
getData = new Subject();

//get value of all controls
saveData(){
  this.resumeData = this.resumeForm.value;
  console.log(this.resumeData);
 this.dataservice.resumeData.next(this.resumeForm.value);
 this.router.navigate(['/resumebuilder/create']);
}
//delete skill field
deleteSkill(index:number){
  if(index == 0){
    console.log('this field is not delete');
  }
  else{
    this.skill = this.resumeForm.get('skill') as FormArray;
    this.skill.removeAt(index);
  }
}



}
