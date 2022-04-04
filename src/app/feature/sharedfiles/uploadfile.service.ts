import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { file } from 'src/app/shared/file-upload/file.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadfileService {
  url:string;

  constructor(private http:HttpClient) { 
    this.url = environment.baseURL;
  }
  
  postFile(file:file):Observable<file>{
    return this.http.post<file>(`${this.url}/files`,file);
  }
  getFiles():Observable<file[]>{
    return this.http.get<file[]>(`${this.url}/files`);
  }

}
