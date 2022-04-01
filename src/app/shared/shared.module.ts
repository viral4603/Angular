import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeletePopUpComponent } from './delete-pop-up/delete-pop-up.component';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchPipe } from './pipes/search.pipe';
import { FileDragAndDropDirective } from './directives/file-drag-and-drop.directive';
import { FileUploadPresentationComponent } from './file-upload/file-upload-presentation/file-upload-presentation.component';



@NgModule({
  declarations: [
    SearchPipe,
    DeletePopUpComponent,
    FilterFormComponent,
    PaginationComponent,
    FileUploadPresentationComponent,
    FileDragAndDropDirective
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    SearchPipe,
    DeletePopUpComponent,
    PaginationComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadPresentationComponent,
  ]
})
export class SharedModule { }
