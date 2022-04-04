import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileUploadServiceService } from '../file-upload-presentor/file-upload-service.service';
import { file } from '../file.model';

@Component({
  selector: 'app-file-upload-presentation',
  templateUrl: './file-upload-presentation.component.html',
  styleUrls: ['./file-upload-presentation.component.scss']
})
export class FileUploadPresentationComponent implements OnInit {
  @Input() displayFileList:file[];
  @Output() filesList : EventEmitter<file> = new EventEmitter<file>();
  fileList:File[];
  file:File[];


  //files array
  public files: any[] = [];
  constructor(private fs:FileUploadServiceService,private cdr:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.fs.files$.subscribe(res=>{
      this.filesList.emit(res);
      this.cdr.markForCheck();
    });
  }

  onFileChange(file:any){
    this.files = Object.keys(file).map(key => file[key]);
    this.file = file;
  }
 
  removeFiles(filename:string){
    this.fs.removeFiles(filename,this.files);
  }

  uploadFiles(){
    this.fs.getFiles(this.file,this.displayFileList);   
    this.file =[]; 
    this.files =[];
  }
}
