import { Component, OnInit } from '@angular/core';
import { Resume } from '../model/resume';
import { DataServicesService } from '../services/data-services.service';

@Component({
  selector: 'app-resumecreat',
  templateUrl: './resumecreat.component.html',
  styleUrls: ['./resumecreat.component.css']
})
export class ResumecreatComponent implements OnInit {
  showData:Resume[];
  resumeWithMaxId: Resume;
 
  constructor(private dataservice:DataServicesService) { }

  ngOnInit(): void {
    this.getData();
    console.log(this.showData)
  }
  //get all details of resume
  getData(){
    this.dataservice.getResumeData().subscribe((data)=>{
      this.showData =data;
      this.maxIdFind();
    },(error=>{
      alert("did't get data")
    })
   )}    
  maxIdFind(): void {
    let maxId: number = -1;
    this.showData.forEach((resume) => {
      if (resume.id > maxId) {
        maxId = resume.id;
        this.resumeWithMaxId = resume;
      }
    });
  }
}
