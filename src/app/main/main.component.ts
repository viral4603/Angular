import { Component, OnInit, ElementRef} from '@angular/core';
import { Comments } from './model/comments';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  constructor() {

  }

  ngOnInit(): void {
  }
  parentCall(data: string) {
    alert("thank you  " + data);
  }
  

}






