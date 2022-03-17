import { Component, OnInit } from '@angular/core';
import { UserdatatransferService } from '../userdatatransfer.service';
import { User } from '../userForm.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  //creat a array for store data
  filterData:User;
  public showdata:User[] =[{firstname: 'tnamay', lastname: 'patel', email: 'ASDDA@GMAIL.COM'}]; 

  constructor(private userService:UserdatatransferService) {
    
   }

  ngOnInit(): void {
    this.userService.userData.subscribe(res => this.showdata.push(res));
  }
  editForm(id:number){
    this.filterData = this.showdata[id-1];
    this.userService.editData.next(this.filterData);
  }
  deleteUser(id:number){

  }

}
