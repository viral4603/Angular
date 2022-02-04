import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

const routes: Routes = [
  {
    path: '', component: EmployeelistComponent,children: [
      { path: 'employeelist', component: EmployeelistComponent },
      { path: 'employeeform', component: EmployeeformComponent }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
