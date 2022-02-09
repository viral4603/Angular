import { Component, OnInit } from '@angular/core';
import { DataServicesService } from '../data-services.service';

@Component({
  selector: 'app-resumecreat',
  templateUrl: './resumecreat.component.html',
  styleUrls: ['./resumecreat.component.css']
})
export class ResumecreatComponent implements OnInit {
  showData:any;
  constructor(private dataservers:DataServicesService) { }

  ngOnInit(): void {
    this.displaydata()
  }
  displaydata(){
    this.dataservers.resumeData.subscribe(data=>{
          this.showData =data;
    })
    
  }

}
