import { Component, Input, OnInit } from '@angular/core';
import { EmployeeServicesService } from '../employeeService/employee-services.service';
import { Department, Employee } from '../model';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  @Input() departments:Department[] =[];
  @Input() employeelist: Employee[] =[];

  constructor(private employeeService:EmployeeServicesService) {

   }

  ngOnInit(): void {
   
  }

 

}
