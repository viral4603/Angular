import { Component, Input, OnInit } from '@angular/core';
import { EmployeeServicesService } from '../employeeService/employee-services.service';
import { Employee } from '../model';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employeeList: Employee[] = [];
  constructor(private employeeService: EmployeeServicesService) {

  }
  ngOnInit(): void {
    this.getEmployeelist();
 }
  //list employee data
  getEmployeelist() {
    this.employeeService.getAllDetails().subscribe((data: Employee[]) => {
      this.employeeList = data;
    })
  }
  editEmployee(){

  }
  deleteEmployee(id:number){
    this.employeeService.deleteProduct(id).subscribe(); 

  }



}
