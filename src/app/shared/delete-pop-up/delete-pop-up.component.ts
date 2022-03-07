import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-pop-up',
  templateUrl: './delete-pop-up.component.html',
  styleUrls: ['./delete-pop-up.component.scss']
})
export class DeletePopUpComponent implements OnInit {
  @Output() value: EventEmitter<boolean>;
  constructor() {
    this.value = new EventEmitter<boolean>();
   }

  ngOnInit(): void {
  }
  close(value: boolean) {
    this.value.emit(value);
  }

}
