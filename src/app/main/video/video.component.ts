import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() name:string ='';
  @Output() dataParent:EventEmitter<string> = new EventEmitter();
  vClass: boolean = false;
  email:string ='';
  getEmail(email:string){
    this.dataParent.emit(this.email);
  }
  constructor() { }

  ngOnInit(): void {
    

  }
  showVideo() {
    this.vClass = !this.vClass;
  }

}
