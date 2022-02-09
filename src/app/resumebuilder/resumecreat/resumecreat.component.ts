import { Component, OnInit } from '@angular/core';
import { Resume } from '../model/resume';
import { DataServicesService } from '../services/data-services.service';

@Component({
  selector: 'app-resumecreat',
  templateUrl: './resumecreat.component.html',
  styleUrls: ['./resumecreat.component.css']
})
export class ResumecreatComponent implements OnInit {
  showData:Resume;
  // showData:Resume;
  // maxid:number;
  // // find max id
  
  // getMaxid(){
  // return  this.showData.forEach(data =>{
  //     if(data.id > this.maxid){
  //       this.maxid = data.id;
  //     }
  //   })
  // }
 

  constructor(private dataservers:DataServicesService) { }

  ngOnInit(): void {
    this.getData();
    debugger
  }
  //get all details of resume
  getData(){
    this.dataservers.getData().subscribe((data)=>{
      this.showData =data;
    },(error=>{
      alert("did't get data")
    })
   )}

    
  
}
