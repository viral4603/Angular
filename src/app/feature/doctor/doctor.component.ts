import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  public user:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.user = this.fb.group({
      
    })
  }
    
  ngOnInit(): void {
  }

}
