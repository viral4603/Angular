import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from './customer.model';

@Injectable()
export class CustomerService {
  baseurl = environment.baseURL;
  constructor(private http:HttpClient) { }

  //get all customer 
  getCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.baseurl}/customer`)
  }
}
