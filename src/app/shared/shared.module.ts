import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeletePopUpComponent } from './delete-pop-up/delete-pop-up.component';
import { FileUploadContainerComponent } from './file-upload-container/file-upload-container.component';
import { FileUploadPresentationComponent } from './file-upload-container/file-upload-presentation/file-upload-presentation.component';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchPipe } from './pipes/search.pipe';
import { FileDragAndDropDirective } from './directives/file-drag-and-drop.directive';



@NgModule({
  declarations: [
    SearchPipe,
    DeletePopUpComponent,
    FilterFormComponent,
    PaginationComponent,
    FileUploadContainerComponent,
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
    FileUploadContainerComponent,
  ]
})
export class SharedModule { }
