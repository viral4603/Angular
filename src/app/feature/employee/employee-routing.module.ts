import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

const routes: Routes = [
  {
    path: '',
    children: [
        {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
        },
        {
            path: 'list',
            component: EmployeelistComponent,
        },
        {
            path: 'add',
            component: EmployeeformComponent,
        },
        {
            path:'add/:id',
            component:EmployeeformComponent,
        }
    ]
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
