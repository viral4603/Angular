import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resume } from '../model/resume';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {
  httpLink: string = environment.baseURL;
  constructor(private https:HttpClient) { 
    
  }
//create service for save data
postdata(data:Resume):Observable<Resume>{
return this.https.post<Resume>(`${this.httpLink}/resume`,data);
}
//get all details from reusme
getData():Observable<Resume>{
  return this.https.get<Resume>(`${this.httpLink}/resume/1`);
}

  

}