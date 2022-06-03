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
  localItem:string | null;
  
  //display list of user
  userdata: User[] = [];



  constructor(private userService: UserdatatransferService) {
    this.localItem = localStorage.getItem("userData");
    if(this.localItem == null){
      this.userdata = [];
    }
    else{
      this.userdata = JSON.parse(this.localItem);
    }

  }

  ngOnInit(): void {
    this.userService._showdata.subscribe(res => {
      if (this.isEditMode) {
        this.userdata[this.activeId] = res;
        this.isEditMode = false;
        localStorage.setItem("userData",JSON.stringify(this.userdata));

      } else {
        this.userdata.push(res);
        localStorage.setItem("userData",JSON.stringify(this.userdata));
      }
    });
    console.log(localStorage.getItem("userData"));
  }

  editForm(id: number) {
    this.filterData = this.userdata[id];
    this.userService.editData.next(this.filterData);
    this.activeId = id;
    this.isEditMode = true;
  }

  deleteUser(id: number) {
    this.userdata.splice(id, 1);
    localStorage.setItem("userData",JSON.stringify(this.userdata)); 
  }

}
