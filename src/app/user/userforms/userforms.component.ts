import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-userforms',
  templateUrl: './userforms.component.html',
  styleUrls: ['./userforms.component.css']
})
export class UserformsComponent implements OnInit {
  
  userGroup = new FormGroup({
    // firstName : (''),
    // lastName :(''),  
  });
  constructor() { }

  ngOnInit(): void {
  }

}
