import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserformsComponent } from './userforms/userforms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { UserlistComponent } from './userlist/userlist.component';
import { FirstcapPipe } from 'src/app/main/custompipe/firstcap.pipe';


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
export class UserModule { 
  constructor(){
    console.log('user module load');
  }
}
