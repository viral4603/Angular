import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchPipe } from './pipes/search.pipe';
import { DeletePopUpComponent } from './delete-pop-up/delete-pop-up.component';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [
    SearchPipe,
    DeletePopUpComponent,
    FilterFormComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    SearchPipe,
    DeletePopUpComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
