import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumecreatComponent } from './resumecreat/resumecreat.component';
import { ResumeformComponent } from './resumeform/resumeform.component';

const routes: Routes = [
  {path:'',children:[
    {path:'',redirectTo:'form',pathMatch:'full'},
    {path:'form',component:ResumeformComponent},
    {path:'create',component:ResumecreatComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumebuilderRoutingModule { }
