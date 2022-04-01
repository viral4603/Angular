import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileUploadServiceService } from '../file-upload-presentor/file-upload-service.service';

@Component({
  selector: 'app-file-upload-presentation',
  templateUrl: './file-upload-presentation.component.html',
  styleUrls: ['./file-upload-presentation.component.scss']
})
export class FileUploadPresentationComponent implements OnInit {
  @Output() filesList:EventEmitter<any> = new EventEmitter<any>();


  //files array
  public files: any[] = [];
  constructor(private fs:FileUploadServiceService,private cdr:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.fs.files$.subscribe(res=>{
      this.filesList.emit(res);
      this.cdr.markForCheck();
      this.files = res;
    });
  }

  onFileChange(file:any){
    this.fs.getFiles(file);
  }
  
  openConfirmDialog(index:number){
    alert(index);
  }

}
