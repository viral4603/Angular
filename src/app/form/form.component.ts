import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public submitted:boolean =false;
  constructor(private fb:FormBuilder) { 

  }
  
  userForm =this.fb.group({
    firstName:['',[Validators.required,Validators.minLength(5)]],
    lastName:['',Validators.required],
    email:['',[Validators.email,Validators.required]],
    gender:['',Validators.required],


  })
  
  ngOnInit(): void {
    console.log(this.userForm);
  }

   // convenience getter for easy access to form fields
   get getValue() { 
     return this.userForm['controls']; 
    }
  
  //onsubmit method call
  saveData(){
    //if user send blank data
    if(this.userForm.dirty){
     
      this.submitted = true;
        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }
    }
    
    
  }
}
