import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumebuilderRoutingModule } from './resumebuilder-routing.module';
import { ResumeformComponent } from './resumeform/resumeform.component';
import { ResumecreatComponent } from './resumecreat/resumecreat.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ResumeformComponent,
    ResumecreatComponent,
  ],
  imports: [
    CommonModule,
    ResumebuilderRoutingModule,
    SharedModule
  ]
})


export class ResumebuilderModule { }
