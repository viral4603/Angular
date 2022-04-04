import { Component, OnInit } from '@angular/core';
import { file } from 'src/app/shared/file-upload/file.model';
import { UploadfileService } from './uploadfile.service';

@Component({
  selector: 'app-sharedfiles',
  templateUrl: './sharedfiles.component.html',
  styleUrls: ['./sharedfiles.component.scss']
})
export class SharedfilesComponent implements OnInit {

  public startDate:string;
  public endDate:string;
  fileList: file[];
  constructor(private uploadService:UploadfileService) { }

  ngOnInit(): void {
    this.getFileList();
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

  //upload files
  postUploadedFile(data:file){
    this.uploadService.postFile(data).subscribe(res =>{
      console.log("file uploaded");
      this.getFileList();
    });
  }

  //getFileList
  getFileList(){
    this.uploadService.getFiles().subscribe(res =>{
      this.fileList = res;
    });
  }

}
