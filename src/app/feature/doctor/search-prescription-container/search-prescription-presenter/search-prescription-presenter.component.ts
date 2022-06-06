import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/feature/user/model/user';

@Component({
  selector: 'app-search-prescription-presenter',
  templateUrl: './search-prescription-presenter.component.html',
  styleUrls: ['./search-prescription-presenter.component.scss']
})
export class SearchPrescriptionPresenterComponent implements OnInit {
public searchForm:FormGroup;
  // public @Input set userDetails(value){

  // }
  
  private _userDetails : User[];
  @Input() public  set userDetails(value : User[] | null) {
    if(value){
      this._userDetails = value;
    }
  }
  public get userDetails() : User[] {
    return this._userDetails;
  }
  
  constructor(private fb:FormBuilder) {
    this.searchForm = this.fb.group({
      userPhone:['',[Validators.required,Validators.maxLength(10)] ]

    })
   }

  ngOnInit(): void {
  }

  public onSearch(){
    if(this.searchForm.valid){
      console.log(this.searchForm)
    }
    console.log(this.searchForm ,this.getControl)
    this.getControl
  }
  //get controls
  public get getControl(){
    return this.searchForm.get('userPhone')
  }
  public viewUser(event:number){
    console.log(event)
  }

}
