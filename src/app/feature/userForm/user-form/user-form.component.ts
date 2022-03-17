import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserdatatransferService } from '../userdatatransfer.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  public userForm:FormGroup;
  public editMode = false;
  constructor(private fb:FormBuilder ,private userService:UserdatatransferService) {    
   }

  ngOnInit(): void {
    this.userForm = this.createUserForm();
    this.userService.editData.subscribe((res)=> {
      this.userForm.patchValue(res)
      this.editMode= true
    });
  }

  //creat form group
  public createUserForm():FormGroup{
    return this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['']
    })  
  }

  //submit user data
  public saveUser(){
    if(!this.userForm.valid){
      alert("please fill a form");
    }
    else{
      console.log(this.userForm.value);
      this.userService.userData.next(this.userForm.value);
    }
  }

}
