import { AfterViewChecked, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-display-mode',
  templateUrl: './display-mode.component.html',
  styleUrls: ['./display-mode.component.scss']
})
export class DisplayModeComponent implements OnInit, AfterViewChecked {
  mode:string ='card';
  @ViewChild('cardTemplate') cardTemplate:TemplateRef<HTMLElement>;
  @ViewChild('listTemplate') listTemplate:TemplateRef<HTMLElement>;
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
   items = [
    {
      header: 'Angular Tutorial',
      content: 'The Angular Tutorial for Beginners & Professionals'
    },
    {
      header: 'Typescript Tutorial',
      content: 'The Complete Guide to Typescript'
    },
    {
      header: 'Entity Framework Code Tutorial',
      content: 'Learn Everything about Entity Framework Core'
    },
  ];
 
   modeOptions = [
    { mode: "card" },
    { mode: "list" },
  ];

  ngAfterViewChecked(){
    //your code to update the model
    this.cdr.detectChanges();
 }

  get template() {
 
    if(this.mode=="list") {
      console.log('hii');
      return this.listTemplate; 
    }
    else{
      console.log(this.cardTemplate);
      return this.cardTemplate; 
    }
  }


}
