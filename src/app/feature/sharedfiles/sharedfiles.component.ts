import { Component, OnInit } from '@angular/core';
import { UploadfileService } from './uploadfile.service';

@Component({
  selector: 'app-sharedfiles',
  templateUrl: './sharedfiles.component.html',
  styleUrls: ['./sharedfiles.component.scss']
})
export class SharedfilesComponent implements OnInit {

  public startDate:string;
  public endDate:string;
  constructor(private uploadService:UploadfileService) { }

  ngOnInit(): void {

  }

  onFileUpload(file:any){
    this.uploadService.postFile(file);
  }

  readStartDate(input:any){
    this.startDate=input.target.value;
  }

  readEndDate(input:any){
    this.endDate=input.target.value;
  }
}
