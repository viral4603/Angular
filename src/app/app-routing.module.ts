import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './core/pagenotfound/pagenotfound.component';
import { DisplayModeComponent } from './feature/display-mode/display-mode.component';


const routes: Routes = [
  {path:'',redirectTo:'main',pathMatch:'full'}, 
  {path:'employee',loadChildren: () => import('./feature/employee/employee.module').then(m => m.EmployeeModule)},
  {path:'resumebuilder',loadChildren: () => import('./feature/resumebuilder/resumebuilder.module').then(m => m.ResumebuilderModule)},
  {path:'user',loadChildren: () => import('./feature/user/user.module').then(m => m.UserModule)},
  { path: 'ngtemplate', component: DisplayModeComponent },
  { path: 'customer', loadChildren: () => import('./feature/customer/customer.module').then(m => m.CustomerModule) },
  { path: 'userForm', loadChildren: () => import('./feature/userForm/user-form.module').then(m => m.UserFormModule) },

  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
    declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
