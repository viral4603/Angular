import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeformComponent,
    EmployeelistComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
    
  ],
  exports:[
    EmployeeformComponent
  ]
})
export class EmployeeModule {
  constructor(){
    console.log('emppoyee module run');
  }
 }
