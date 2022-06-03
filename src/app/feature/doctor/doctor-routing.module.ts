import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePrescriptionContainerComponent } from './create-prescription-container/create-prescription-container.component';
import { DoctorComponent } from './doctor.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'home',
        component:DoctorComponent
      },
      {
        path: 'create-prescription',
        component: CreatePrescriptionContainerComponent
      },
      
      {
        path:'',
        redirectTo : 'home',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
