import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { IdToNamePipe } from './userpipe/id-to-name.pipe';
import { SearchClientPipe } from './userpipe/search-client.pipe';



@NgModule({
  declarations: [
    UserComponent,
    IdToNamePipe,
    SearchClientPipe
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    UserComponent,
  ]
})
export class UserModule { }
