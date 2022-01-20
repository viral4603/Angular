import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
   firstName:string ="";
   lastName:string="";
   vClass:boolean = false;
 constructor() { 
   
  }

  ngOnInit(): void {
  }
  parentCall(data:string){
    alert("thank you  "+ data);
  }
  showVideo(){
      this.vClass =true;
    }
  closeVideo(){
    this.vClass=false;
  }
    

  
}

