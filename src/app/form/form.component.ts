import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  constructor(private fb:FormBuilder) { 

  }
  
  formGroup =this.fb.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
  })
  ngOnInit(): void {
  }
  saveData(){
    console.log(this.formGroup)
  }


}
