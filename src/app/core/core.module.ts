import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeformComponent,
    EmployeelistComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
