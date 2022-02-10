import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { VideoComponent } from './main/video/video.component';
import { PagenotfoundComponent } from './core/pagenotfound/pagenotfound.component';
import { UserformsComponent } from './feature/user/userforms/userforms.component';


const routes: Routes = [
  {path:'',redirectTo:'main',pathMatch:'full'}, 
  {path:'main',component:MainComponent},
  {path:'reactivefoms',component:VideoComponent},
  {path:'userform',component:UserformsComponent},
  {path:'employee',loadChildren: () => import('./feature/employee/employee.module').then(m => m.EmployeeModule)},
  {path:'resumebuilder',loadChildren: () => import('./feature/resumebuilder/resumebuilder.module').then(m => m.ResumebuilderModule)},
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
    declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
