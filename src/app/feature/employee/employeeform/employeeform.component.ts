import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { EmployeeServicesService } from '../employeeService/employee-services.service';
import { Department, Employee } from '../model';


@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.scss']
})
export class EmployeeformComponent implements OnInit {
  submited:boolean =false;
  employee: Employee;
  employeeForm = {} as FormGroup;
  departmentList:Department[]=[];
  // urlid:number;
  closeForm:boolean =true;
  @Input() UserData:Employee;

  @Output() cancelUser:EventEmitter<any> = new EventEmitter<any>();
  @Output() saveUser:EventEmitter<any> = new EventEmitter<any>();
  @Input() urlid:number;

 
    ngOnInit(): void {
    this.employeeForm = this.createEmployeeForm()
    this.listDepartment();
    // this.getUrlId();
    // this.patchValueForm(this.urlid);
    }
  constructor(private fb: FormBuilder, private employeeService: EmployeeServicesService ,private router:Router,private activateRouter:ActivatedRoute) {

  }

  
  //get id from url
  // getUrlId(){
  //   this.urlid = this.activateRouter.snapshot.params['id'];
  // }
  //upadte value in input 
  patchValueForm(id:number){
    this.employeeService.getDataById(id).subscribe((res:Employee) =>{
      this.employeeForm.patchValue(res);
    })
  }

  //create a employe form
  createEmployeeForm(): FormGroup {
    return this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(5)]],
      lastname: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: [null, [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      gender: ['male'],
      joiningdate: [null],
      department: ['', Validators.required]
    })
  }
  //create new entry of employee
  saveEmployee() {
    if (this.employeeForm['status'] == 'INVALID') {
      this.submited =true;
          console.log('reslove error');
    }
    else {
      if(this.urlid == 0){
        this.employeeService.createEmployee(this.employeeForm.value).subscribe(res => {
          console.log('Product created!');
          this.saveUser.emit(true);
          // this.router.navigate(['/employee/list']);
        })
      }
      else{
              
        this.employeeService.updateEmployee(this.urlid,this.employeeForm.value).subscribe(res =>{
          console.log('employee upadte succesfully');
          this.router.navigate(['/employee/list']);
          this.saveUser.emit(true);          
        })
      } 
    
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
  listDepartment(){
    this.employeeService.getDepartment().subscribe(data => {
      this.departmentList =data;
    })
  }
  public cancelEmployee(){
    this.cancelUser.emit(this.closeForm);
    this.router.navigate(['/employee/list']);
  }


}
