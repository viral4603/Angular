import { Injectable } from '@angular/core';
import { catchError, Observable, Subject } from 'rxjs';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';



import { Department, Employee } from '../model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServicesService {

  httpLink: string = environment.baseURL;

  constructor(private https: HttpClient) { 
     
  } 
  //add employee
  createEmployee(employee:Employee): Observable<Employee> {
     return this.https.post<Employee>(`${this.httpLink}/employee`,employee);
  }
  getAllDetails(): Observable<Employee[]> {
    return this.https.get<Employee[]>(`${this.httpLink}/employee`);
  }

  //delele employee
  deleteProduct(id:number):Observable<number>{
    return this.https.delete<number>(`${this.httpLink}/employee/${id}`);
  }
  
  // send data to all parentcomponet

  


}
