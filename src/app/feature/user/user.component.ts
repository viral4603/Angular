import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client, Office, User } from './model/user';
import { UserService } from './userService/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css',]
})
export class UserComponent implements OnInit {
  //userbtn display form
  userbtn: boolean = false;
  //user submite data
  submitted:boolean =false;
  userForm: FormGroup;
  clients: Client[];
  offices: Office[];
  userlist: User[];
  updateId: number;
  searchId:number;

  constructor(private fb: FormBuilder, private services: UserService) { }

  ngOnInit(): void {
    this.createForm();
    this.getClients();
    this.getOffices();
    this.getUserList();
  }
  //get clients
  private getClients() {
    this.services.getClientlist().subscribe((data) => {
      this.clients = data;
    }, (error => {
      alert(`didn't get data form clients`)
    }))
  }
  //get offices
  private getOffices() {
    this.services.getOfficeList().subscribe((data) => {
      this.offices = data;
    }, (error => {
      alert(`didn't get data form office`)
    }))
  }
  //get userlist
  private getUserList() {
    this.services.getUsersdetails().subscribe((data) => {
      this.userlist = data;
    }, (error => {
      alert(`didn't get data`)
    }))
  }


  //create a form group
  public createForm() {
    this.userForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      clientname: ['', Validators.required],
      office: ['', Validators.required]
    })
  }

  //getcontrol of form
  public get control(){
    return this.userForm['controls']
  }
  //toggle button disble 
  public togglebtn() {
    this.userbtn = !this.userbtn;
  }
  //close form on cancel
  public closeForm() {  
    this.userbtn = !this.userbtn
    this.userForm.reset();
  }

  //save userdata to database
  public saveUserData() {
    if (this.userForm.status == 'INVALID') {
      this.submitted =true;
    }
    else {
      if (this.updateId) {
        this.services.updateUser(this.updateId, this.userForm.value).subscribe(data => {
          alert('data Upadte')
        }, (error => {
          alert(`did't update data`)
        }))
        this.togglebtn();
        this.getUserList();
        this.userForm.reset();

      }
      else {
        this.services.createUser(this.userForm.value).subscribe((res) => {
          alert('saved succesfully!')
        }, (error => {
          alert('something went wrong')
        }))
        
        this.getUserList();
        this.userForm.reset();
      }

    }
  }
  //edit user
  public editUser(id: number) {
    this.updateId = id;
    this.services.getUserById(id).subscribe((data) => {
      this.userForm.patchValue(data);
    }, (error => {
      alert(`did't get data`);
    }))
    this.userbtn = true;

  }
  //delete user
  public deleteUser(id: number) {
    this.services.deleteUser(id).subscribe((res) => {
      alert('delete record')
    }, (error => {
      alert('somting went wrong');
    }))
    this.getUserList();
  }
}
