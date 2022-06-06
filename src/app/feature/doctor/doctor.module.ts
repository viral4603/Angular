import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { CreatePrescriptionContainerComponent } from './create-prescription-container/create-prescription-container.component';
import { SearchPrescriptionContainerComponent } from './search-prescription-container/search-prescription-container.component';
import { SearchPrescriptionPresenterComponent } from './search-prescription-container/search-prescription-presenter/search-prescription-presenter.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DoctorComponent,
    CreatePrescriptionContainerComponent,
    SearchPrescriptionContainerComponent,
    SearchPrescriptionPresenterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
