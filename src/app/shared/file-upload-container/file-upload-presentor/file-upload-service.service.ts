import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadServiceService {
  private _files:Subject<any>;
  public files$:Observable<any>; 

  constructor() { 
    this._files = new Subject<any>();
    this.files$ = this._files.asObservable();
  }
  getFiles(file:any){
    this._files.next(file);
  }

}
