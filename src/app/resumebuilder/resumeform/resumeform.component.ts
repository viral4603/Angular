import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resumeform',
  templateUrl: './resumeform.component.html',
  styleUrls: ['./resumeform.component.css']
})
export class ResumeformComponent implements OnInit {
  resumeForm:FormGroup;
  constructor(private formgroup:FormBuilder) { }

  ngOnInit(): void {
  }
  createForm(){
    this.resumeForm = this.formgroup.group({
      name:['',Validators.required],
      designation:[''],
      email:['',Validators.email],
      number:[''],
      profile:[''],
      
    })
  }

}
