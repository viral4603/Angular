import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServicesService } from '../employeeService/employee-services.service';
import { Department, Employee } from '../model';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {
  departmentList:Department[];
  public searchtext:string="";
  employeeList: Employee[];
  constructor(private employeeService: EmployeeServicesService,private router:Router) {

  }
  ngOnInit(): void {
    this.getEmployeelist();
    this.listDepartment();
 }
  //list employee data
  getEmployeelist() {
    this.employeeService.getAllDetails().subscribe((data: Employee[]) => {
      this.employeeList = data;
    })
  }
  editEmployee(id:number){
    this.router.navigate([`/employee/add/${id}`]);
  }
  deleteEmployee(id:number){
    this.employeeService.deleteProduct(id).subscribe((res:number)=>{
      this.getEmployeelist();
    }); 
  }
  listDepartment(){
    this.employeeService.getDepartment().subscribe(data => {
      this.departmentList =data;
    })
  }




}
