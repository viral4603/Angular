import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchPipe } from './pipes/search.pipe';
import { DeletePopUpComponent } from './delete-pop-up/delete-pop-up.component';



@NgModule({
  declarations: [
    SearchPipe,
    DeletePopUpComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SearchPipe,
    DeletePopUpComponent
  ]
})
export class SharedModule { }
