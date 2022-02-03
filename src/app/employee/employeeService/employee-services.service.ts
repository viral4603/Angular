import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';



import { Department, Employee } from '../model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServicesService {

  constructor(private http: HttpClient) { 
     
  } 
  
  saveProduct(employee:Employee): Observable<Employee> {
    debugger
    return this.http.post<Employee>(`localhost:3000/employee`,employee);
  }

  getEmployeelist():Observable<Employee[]>{
    return this.http.get<Employee[]>(`localhost:3000/employee`);
  }

}
