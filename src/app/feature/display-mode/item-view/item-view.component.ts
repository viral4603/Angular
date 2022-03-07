import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() itemTemplate: TemplateRef<HTMLElement>;
  @ViewChild('cardTemplate') cardTemplate:TemplateRef<HTMLElement>;
  @ViewChild('listTemplate') listTemplate:TemplateRef<HTMLElement>;
  constructor() { }

  ngOnInit(): void {
    console.log(this.cardTemplate);
  }

}
