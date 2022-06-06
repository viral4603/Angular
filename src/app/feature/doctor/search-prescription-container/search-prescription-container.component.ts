import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../user/model/user';
import { UserService } from '../../user/userService/user.service';

@Component({
  selector: 'app-search-prescription-container',
  templateUrl: './search-prescription-container.component.html',
  styleUrls: ['./search-prescription-container.component.scss']
})
export class SearchPrescriptionContainerComponent implements OnInit {
  public userDetails$:Observable<User[]>;
  constructor(private user:UserService) { }

  ngOnInit(): void {
    this.userDetails$ = this.getUser();
  }
  //get All user details
  public getUser(){
    return this.user.getUsersdetails();
  }

  //get user by id
  public getUserById(){
    return this.user.getUserById(1);
  }

}
