import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';


@NgModule({
  declarations: [
    EmployeeformComponent,
    EmployeelistComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    
  ],
  exports:[
    EmployeeformComponent
  ]
})
export class EmployeeModule { }
