import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { CustomerForm } from '../../customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerFormService {
  public customerData:Subject<CustomerForm>;
  public customerData$:Observable<CustomerForm>;
  
  
  constructor(private fb:FormBuilder) { 
    this.customerData = new Subject();
    // this.customerData.asObservable();
  }
  //create form group
  buildFormGroup(){
    return this.fb.group({
      name:['',[Validators.required]],
      age:['',Validators.required],
      gender:['',Validators.required]
    })
  }
  onSubmit(customerForm:FormGroup){
    if(!customerForm.valid){
      return 
    }
    else{
      this.customerData.next(customerForm.value);
    }
  }

}


