import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServicesService } from '../employeeService/employee-services.service';
import { Department, Employee } from '../model';
import * as crypto from 'crypto-js';



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
  formData = new FormData();
  selectedFile: string | Blob;
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
//select file 
  public onFileSelected(event:any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
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
      department: ['', Validators.required],
    })
  }

  //send data using form group

  //create new entry of employee
  saveEmployee() {

// Encrypt
    var ciphertext = crypto.SHA512('Veer@123').toString();
    console.log(ciphertext);
    console.log(ciphertext.length);
    // var deCrypt = crypto.AES.decrypt(ciphertext,'secret key 123').toString(crypto.enc.Utf8);
    // console.log(deCrypt);

    this.formData.append('firstname',this.employeeForm.value.firstname);
    this.formData.append('lastname',this.employeeForm.value.lastname);
    this.formData.append('email',this.employeeForm.value.email);
    this.formData.append('phone',this.employeeForm.value.phone);
    this.formData.append('gender',this.employeeForm.value.gender);
    this.formData.append('joiningdate',this.employeeForm.value.joiningdate);
    this.formData.append('department',this.employeeForm.value.department);
    this.formData.append('image', this.selectedFile);    
    console.log(this.formData.get("image"));

    if (this.employeeForm['status'] == 'INVALID') {
      this.submited =true;
          console.log('reslove error');
    }
    else {
  
      if(!this.urlid){
        this.employeeService.createEmployee(this.formData).subscribe(res => {
          console.log('Product created!',res);
          this.saveUser.emit();
          // this.router.navigate(['/employee/list']);
        })
      }
      else{
              
        this.employeeService.updateEmployee(this.urlid,this.employeeForm.value).subscribe(res =>{
          console.log('employee upadte succesfully');
          this.router.navigate(['/employee/list']);
          this.saveUser.emit();          
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
