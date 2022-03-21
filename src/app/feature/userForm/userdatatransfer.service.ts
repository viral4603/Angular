import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, subscribeOn } from 'rxjs';
import { User } from './userForm.model';

@Injectable({
  providedIn: 'root'
})
export class UserdatatransferService {
  public editData:Subject<User>;
  public _showdata:BehaviorSubject<User>;

  constructor() {
    this.editData = new Subject<User>();
    this._showdata = new BehaviorSubject<User>({firstname: 'tnamay', lastname: 'patel', email: 'ASDDA@GMAIL.COM'});
  }
}
