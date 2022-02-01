import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-userforms',
  templateUrl: './userforms.component.html',
  styleUrls: ['./userforms.component.css']
})
export class UserformsComponent implements OnInit {
  firstName: string = "";
  lastName: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
