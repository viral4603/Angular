import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserformsComponent } from './userforms/userforms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserlistComponent } from './userlist/userlist.component';
import { HighlightDirective } from './highlight.directive';
import { FirstcapPipe } from '../main/custompipe/firstcap.pipe';



@NgModule({
  declarations: [
    UserformsComponent,
    UserlistComponent,
    HighlightDirective,
    FirstcapPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    HighlightDirective
  ]
})
export class UserModule { }
