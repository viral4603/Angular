import { Injectable } from '@angular/core';
import { Observable, reduce, Subject } from 'rxjs';
import { file } from '../file.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadServiceService {

  public fileData: file;

  private _files: Subject<any>;
  public files$: Observable<any>;

  constructor() {
    this._files = new Subject<any>();
    this.files$ = this._files.asObservable();

  }

  getFiles(file: File[],filelist:file[]) {
    for (let i = 0; i < file?.length; i++) {
      if(filelist[i]?.name ==file[i].name){
        alert ("same file exists");
      }
      else{
        let reader = new FileReader();
        reader.readAsDataURL(file[i]);
        reader.onload = () => {
          this.fileData = {} as file;
          this.fileData.name = file[i].name;
          this.fileData.size = file[i].size;
          this.fileData.type = file[i].type;
          this.fileData.content = reader.result;
          this._files.next(this.fileData);
        }
      }
  
    }
  }

  //remove uploaded file
  removeFiles(filename: string, data: any) {
    const index = data.findIndex((file: any) => file.name == filename);
    return data.splice(index, 1);
  }

}
