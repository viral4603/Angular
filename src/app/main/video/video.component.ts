import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Input() name:string ='';
  @Output() dataParent:EventEmitter<any> = new EventEmitter();
  email:string ='asas@gmail.com';
  getEmail(email:string){
    this.dataParent.emit(this.email);
  }

  constructor() { }

  ngOnInit(): void {
    

  }

}
