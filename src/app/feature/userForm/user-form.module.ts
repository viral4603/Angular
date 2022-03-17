import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFormRoutingModule } from './user-form-routing.module';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UserFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserFormModule { }
