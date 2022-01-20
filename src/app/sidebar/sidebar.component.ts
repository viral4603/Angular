import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isSpecial:boolean = true;
  name: string ='veer';
  name1:string ='ajay';
  arr =['ajay','viral','rtanmay','sushil'];
  constructor() { 
    
  }
 
  
  ngOnInit(): void {
    
  }
  

}
