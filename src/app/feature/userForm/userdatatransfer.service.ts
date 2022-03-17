import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './userForm.model';

@Injectable({
  providedIn: 'root'
})
export class UserdatatransferService {
  public userData:Subject<User>;
  public editData:Subject<User>;

  constructor() { 
    this.userData =new Subject<User>();
    this.editData = new Subject<User>();
  }
}
