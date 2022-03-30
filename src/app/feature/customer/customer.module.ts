import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerFormContainerComponent } from './customer-form-container/customer-form-container.component';
import { CustomerFormPresentationComponent } from './customer-form-container/customer-form-presentation/customer-form-presentation.component';
import { CustomerListContainerComponent } from './customer-list-container/customer-list-container.component';
import { CustomerListPresentationComponent } from './customer-list-container/customer-list-presentation/customer-list-presentation.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';



@NgModule({
  declarations: [
    CustomerComponent,
    CustomerFormContainerComponent,
    CustomerFormPresentationComponent,
    CustomerListContainerComponent,
    CustomerListPresentationComponent   
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    DragDropModule
  ],
  providers:[
    CustomerService
  ]
})
export class CustomerModule { }
