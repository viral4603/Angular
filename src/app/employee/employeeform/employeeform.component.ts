import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { EmployeeServicesService } from '../employeeService/employee-services.service';
import { Employee } from '../model';


@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {

  employee: Employee[] = [];
  employeeForm = {} as FormGroup;

  ngOnInit(): void {
    this.employeeForm = this.createEmployeeForm()
    }
  constructor(private fb: FormBuilder, private employeeService: EmployeeServicesService) {

  }

  //create a employe form
  createEmployeeForm(): FormGroup {
    return this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(5)]],
      lastname: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: [null, [Validators.required, Validators.minLength(10)]],
      gender: ['male'],
      joiningdate: [null],
      department: ['', Validators.required]
    })
  }
  //create new entry of employee
  saveEmployee() {
    if (this.employeeForm['status'] == 'INVALID') {
      console.log('reslove error');
    }
    else {
      console.log(this.getValue);
      this.employeeService.createEmployee(this.employeeForm.value).subscribe(res => {
        console.log('Product created!');
      })
    }
  }

  // convenience getter for easy access to form fields
  get getValue() {
    return this.employeeForm['controls'];
  }

  //onsubmit method call
  saveData() {
    //if user send blank data
    this.employeeService.getAllDetails();
  }


}
