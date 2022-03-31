import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload-presentation',
  templateUrl: './file-upload-presentation.component.html',
  styleUrls: ['./file-upload-presentation.component.scss']
})
export class FileUploadPresentationComponent implements OnInit {

  //files array
  public files: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onFileChange(pFileList:any){
    this.files = Object.keys(pFileList).map(key => pFileList[key]);
  }
  
  openConfirmDialog(index:number){
    alert(index);
  }

}
