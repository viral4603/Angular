import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { VideoComponent } from './main/video/video.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserformsComponent } from './user/userforms/userforms.component';
import { EmployeelistComponent } from './employee/employeelist/employeelist.component';
import { EmployeeformComponent } from './employee/employeeform/employeeform.component';


const routes: Routes = [
  {path:'main',component: MainComponent},
  {path:'reactivefoms',component:VideoComponent},
  {path:'userform',component:UserformsComponent},
  {path:'employee',loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)},
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
