import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {
  
  constructor() { 
    
  }
  resumeData = new BehaviorSubject({
    
  });
  

}