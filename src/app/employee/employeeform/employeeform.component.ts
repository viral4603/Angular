import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { EmployeeServicesService } from '../employeeService/employee-services.service';
import { Employee } from '../model';


@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {

  @Output() addEmployee:EventEmitter<Employee> =new EventEmitter();
  
  employeeForm = {} as FormGroup;
 
  ngOnInit(): void {
    this.employeeForm = this.createEmployeeForm()
    console.log(this.getValue);
    
  }
  constructor(private fb:FormBuilder,private employeeService:EmployeeServicesService) { 

  }
  createEmployeeForm():FormGroup{
    return this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(5)]],
      lastName:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      phone:[Number,[Validators.required,Validators.minLength(10)]],
      gender:['male'],
      joiningdate:[Date],
      department:['',Validators.required]     
    })
  }

  saveProduct() {
    const productToSave = this.employeeForm.value;
    if (this.employeeForm.valid) {
      this.addEmployee.emit(productToSave);
    }
    else{
      console.log("solve Errors");
    }
  }

   // convenience getter for easy access to form fields
   get getValue() { 
     return this.employeeForm['controls']; 
    }
  
  //onsubmit method call
  saveData(){
    //if user send blank data
    this.employeeService.getEmployeelist();
     
    }
  

}
