import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  activeLink:boolean =false;
  isActive:string ='';
  constructor() {}

  ngOnInit(): void {}

}
