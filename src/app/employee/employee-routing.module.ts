import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

const routes: Routes = [
  {
    path: '', component: EmployeelistComponent,
    children: [
      {
        path: 'employeeform', component: EmployeeformComponent
      },
      {
        path: 'employeelist', component: EmployeelistComponent
      },
     
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
