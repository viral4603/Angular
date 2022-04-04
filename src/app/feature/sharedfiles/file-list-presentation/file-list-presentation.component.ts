import { Component, Input, OnInit } from '@angular/core';
import { file } from 'src/app/shared/file-upload/file.model';

@Component({
  selector: 'app-file-list-presentation',
  templateUrl: './file-list-presentation.component.html',
  styleUrls: ['./file-list-presentation.component.scss']
})
export class FileListPresentationComponent implements OnInit {
  @Input() displayFileList:file[];

  constructor() { }

  ngOnInit(): void {
    
  }

}
