import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Resume } from '../model/resume';
import { DataServicesService } from '../services/data-services.service';

@Component({
  selector: 'app-resumeform',
  templateUrl: './resumeform.component.html',
  styleUrls: ['./resumeform.component.css']
})
export class ResumeformComponent implements OnInit {
  submited: boolean = false;
  skill: FormArray;
  technical: FormArray;
  skillControl: FormArray;
  experience: FormArray;
  resumeForm: FormGroup;
  resumeData: Resume;
  constructor(private formgroup: FormBuilder, private dataservice: DataServicesService, private router: Router) {

  }

  ngOnInit(): void {
    this.resumeForm = this.createForm();
    this.addSkill();
    this.addTechnical();
    this.addExeperience();
  }
  createForm(): FormGroup {
    return this.formgroup.group({
      name: ['', Validators.required],
      designation: [''],
      email: ['', Validators.email],
      number: [''],
      profile: [''],
      skill: this.formgroup.array([]),
      technical: this.formgroup.array([]),
      experience: this.formgroup.array([]),
      education: [''],
      educationDescription: [''],
    })
  }
  //get value of formcontrol
  get controls() {
    return this.resumeForm['controls'];
  }
 //get control of skill array
 get skillcontrol(){
     return (this.resumeForm.get('skill')as FormArray).controls;
 }

 getAsFormGroup(ac: AbstractControl): FormGroup {
  return ac as FormGroup;
 }

  //get controls of skill array
  skillfield(): FormGroup {
    return this.formgroup.group({
      skills: ['', Validators.required],
      skilldetails: ['', Validators.required],
    })
  }
  //add more skill field into fromgroup
  addSkill() {
    this.skill = this.resumeForm.get('skill') as FormArray;
    this.skill.push(this.skillfield());
  }

  //get Technial field controls
  technicalField(): FormGroup {
    return this.formgroup.group({
      technical: [''],
    })
  }
  //submit control into arry
  addTechnical() {
    this.technical = this.resumeForm.get('technical') as FormArray;
    this.technical.push(this.technicalField());
  }
  //get Technial field controls
  exeperienceField(): FormGroup {
    return this.formgroup.group({
      company: [''],
      designationInCompany: [''],
      detailscompny: [],
    })
  }
  //submit control into arry
  addExeperience() {
    this.experience = this.resumeForm.get('experience') as FormArray;
    this.experience.push(this.exeperienceField());
  }
  //get value of all controls
  saveData() {
    this.resumeData = this.resumeForm.value;

    if (this.resumeForm['status'] === 'INVALID') {
      this.submited = true;
      console.log('resolve errors');
    }
    else {
       this.dataservice.postdata(this.resumeData).subscribe((res) => {
        alert('data send suceesfully')
      }, (error => {
        alert("Somethings Went Wrong")
      }))
      this.router.navigate(['/resumebuilder/create']);
      this.resumeForm.reset();
    }

  }

  //send data to local server
  deletArray(id:number, control:string){
    if (id == 0) {
      console.log('this field is not delete');
    }
    else {
      this.skill = this.resumeForm.get(control) as FormArray;
      this.skill.removeAt(id);
    }

  }
  //reset form
  resetForm(){
    return this.resumeForm.reset();
  }



}
