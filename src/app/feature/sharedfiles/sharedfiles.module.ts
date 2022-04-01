import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedfilesRoutingModule } from './sharedfiles-routing.module';
import { SharedfilesComponent } from './sharedfiles.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FileListPresentationComponent } from './file-list-presentation/file-list-presentation.component';


@NgModule({
  declarations: [
    SharedfilesComponent,
    FileListPresentationComponent
  ],
  imports: [
    CommonModule,
    SharedfilesRoutingModule,
    SharedModule
  ]
})
export class SharedfilesModule { }
