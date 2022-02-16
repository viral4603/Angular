import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public submitted:boolean =false;
  constructor(private fb:FormBuilder) { 

  }
  userForm = {} as FormGroup;
 
  ngOnInit(): void {
    this.userForm = this.createUserForm()
    console.log(this.userForm);
  }
  createUserForm():FormGroup{
    return this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(5)]],
      lastName:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      gender:['',Validators.required],
    })
  }
   // convenience getter for easy access to form fields
   get getValue() { 
     return this.userForm['controls']; 
    }
    get invalidform(){
      return this.userForm['status'] ==="INVALID"
    }
  
  //onsubmit method call
  saveData(){
    //if user send blank data
    this.submitted = true;
        // stop here if form is invalid
        if (this.userForm.valid) {
            alert('form  submitted');
        }
    
  }
}
