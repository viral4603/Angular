import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { GetNamePipe } from './get-name.pipe';



@NgModule({
  declarations: [
    EmployeeformComponent,
    EmployeelistComponent,
    GetNamePipe,
    

  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
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
