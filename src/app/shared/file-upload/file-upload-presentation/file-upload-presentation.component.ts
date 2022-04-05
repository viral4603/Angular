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

  //files array
  public files: File[] = [];
  constructor(private fs:FileUploadServiceService,private cdr:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.fs.files$.subscribe((res:any)=>{
      this.filesList.emit(res);
      this.files.splice(this.files.indexOf(res.name),1);
      this.cdr.markForCheck();
    });
  }

  public onFileChange(file:File[]){
    this.files = Object.keys(file).map((key:any) => file[key]);
  }
 
  public removeFiles(filename:string){
    this.fs.removeFiles(filename,this.files);   
    this.files = this.files;

  }

  public uploadFiles(){
    if(this.files.length>0){
      this.fs.uploadFiles(this.files,this.displayFileList);   
      this.files =[];
    }
    else{
      alert("select a files");
    }
  }
}
