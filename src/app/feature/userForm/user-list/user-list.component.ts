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
  filterData: User;
  activeId: number;
  isEditMode: boolean = false;
  
  //display list of user
  userdata: User[] = [];



  constructor(private userService: UserdatatransferService) {

  }

  ngOnInit(): void {
    this.userService._showdata.subscribe(res => {
      if (this.isEditMode) {
        this.userdata[this.activeId] = res;
        this.isEditMode = false;
      } else {
        this.userdata.push(res);
      }
    });
  }

  editForm(id: number) {
    this.filterData = this.userdata[id];
    this.userService.editData.next(this.filterData);
    this.activeId = id;
    this.isEditMode = true;
  }

  deleteUser(id: number) {
    return this.userdata.splice(id, 1);
  }

}
