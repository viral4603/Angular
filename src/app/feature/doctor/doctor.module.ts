import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { CreatePrescriptionContainerComponent } from './create-prescription-container/create-prescription-container.component';


@NgModule({
  declarations: [
    DoctorComponent,
    CreatePrescriptionContainerComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
