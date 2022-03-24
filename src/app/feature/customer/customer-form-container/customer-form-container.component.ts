import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category, Customer, CustomerForm } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-form-container',
  templateUrl: './customer-form-container.component.html',
  styleUrls: ['./customer-form-container.component.scss']
})
export class CustomerFormContainerComponent implements OnInit {
  private urlId:string;
  public customerData$:Observable<Customer>;
  public categories$:Observable<Category[]>;
  
  constructor(private customerService:CustomerService, private route:Router,private activateRoute:ActivatedRoute) { 
    this.customerData$ = new Observable();
  }

  ngOnInit(): void {
    this.urlId = this.activateRoute.snapshot.params['id'];
    console.log(this.urlId);
    if(this.urlId){
      this.customerData$ = this.customerService.getCustomerById(this.urlId);
    }
    this.categories$ = this.customerService.getCustomerCatgeroies();
  }

  //post a data
  onsubmit(data:CustomerForm){
    this.customerService.addUser(data).subscribe((res:CustomerForm)=>{
      alert(`data saved susccefully`)
      this.route.navigateByUrl('customer/list')

    },(error)=>{
      alert(`something went wrong`)
    })
  }
  editCustomer(data:CustomerForm){
    this.customerService.editCustomer(data,this.urlId).subscribe((res)=>{
        alert(`edit data succesfully`);
        this.route.navigateByUrl('customer/list')
    })
  }

}
