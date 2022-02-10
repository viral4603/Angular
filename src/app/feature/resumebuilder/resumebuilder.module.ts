import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumebuilderRoutingModule } from './resumebuilder-routing.module';
import { ResumeformComponent } from './resumeform/resumeform.component';
import { ResumecreatComponent } from './resumecreat/resumecreat.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ResumeformComponent,
    ResumecreatComponent,
  ],
  imports: [
    CommonModule,
    ResumebuilderRoutingModule,
    ReactiveFormsModule
  ]
})


export class ResumebuilderModule { }
