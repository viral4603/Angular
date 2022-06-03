import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  public firstForm:FormGroup;
  public secondForm:FormGroup;
  public isSecondForm:boolean = false;
  public isSecondCompleted:boolean = false;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.firstForm    = this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required]
    })
    this.secondForm = this.fb.group({
      email:['',Validators.required],
      address:['',Validators.required]
    })
  
  }
  //user submit information
  public onSubmit(){
    if(this.firstForm.valid){
      this.isSecondForm = true;
    }
    else{
      alert("enter valid details");
    }
    if(this.isSecondForm && this.secondForm.valid){
      this.isSecondCompleted = true;
    }
  }
  //when user click on previous 
  public onPrevious(){
    if(this.isSecondForm){
      this.isSecondForm = !this.secondForm;
      this.isSecondCompleted = false;
      this.secondForm.reset();
    }
  }

}
