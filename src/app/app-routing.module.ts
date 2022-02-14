import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './core/pagenotfound/pagenotfound.component';
import { MainComponent } from './main/main.component';
import { VideoComponent } from './main/video/video.component';


const routes: Routes = [
  {path:'',redirectTo:'main',pathMatch:'full'}, 
  {path:'main',component:MainComponent},
  {path:'reactivefoms',component:VideoComponent},
  {path:'employee',loadChildren: () => import('./feature/employee/employee.module').then(m => m.EmployeeModule)},
  {path:'resumebuilder',loadChildren: () => import('./feature/resumebuilder/resumebuilder.module').then(m => m.ResumebuilderModule)},
  {path:'user',loadChildren: () => import('./feature/user/user.module').then(m => m.UserModule)},

  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
    declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
