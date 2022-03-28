import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerFormContainerComponent } from './customer-form-container/customer-form-container.component';
import { CustomerListContainerComponent } from './customer-list-container/customer-list-container.component';
import { CustomerFormPresentationComponent } from './customer-form-container/customer-form-presentation/customer-form-presentation.component';
import { CustomerListPresentationComponent } from './customer-list-container/customer-list-presentation/customer-list-presentation.component';
import { CustomerService } from './customer.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



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
    ReactiveFormsModule,
    SharedModule
  ],
  providers:[
    CustomerService
  ]
})
export class CustomerModule { }
