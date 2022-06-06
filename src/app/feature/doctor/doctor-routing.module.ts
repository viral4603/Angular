import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePrescriptionContainerComponent } from './create-prescription-container/create-prescription-container.component';
import { DoctorComponent } from './doctor.component';
import { SearchPrescriptionContainerComponent } from './search-prescription-container/search-prescription-container.component';

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
        path: 'search-prescription',
        component: SearchPrescriptionContainerComponent
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
