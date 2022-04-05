import { Injectable } from '@angular/core';
import { Observable, reduce, Subject } from 'rxjs';
import { file } from '../file.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadServiceService {
  private _files: Subject<file>;
  public files$: Observable<file>;

  constructor() {
    this._files = new Subject<any>();
    this.files$ = this._files.asObservable();
  }

  public uploadFiles(file: File[], filelist: file[]) {
    //get filename which already exists in json
    const fileNames = filelist.map(value => value.name);

    //loop over uploaded files
    for (let i = 0; i < file?.length; i++) {
      //check file size
      if ((file[i]?.size / (1024 ** 2)) < 2) {
        //check file exist
        if (fileNames.includes(file[i]?.name)) {
          alert("same file exists");
        }
        else {
          let reader = new FileReader();
          reader.readAsDataURL(file[i]);
          reader.onload = () => {
            const fileData = {} as file;
            fileData.name = file[i].name;
            fileData.size = file[i].size;
            fileData.type = file[i].type;
            fileData.content = reader.result;
            this._files.next(fileData);
          }
        }
      }
      else {
        console.error("File size limit (2 MB) exceeded");
      }
    }
  }

  //remove uploaded file
  removeFiles(filename: string, data: any) {
    const index = data.findIndex((file: any) => file.name == filename);
    return data.splice(index, 1);
  }

}
