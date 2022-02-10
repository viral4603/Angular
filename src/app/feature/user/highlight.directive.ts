import { style } from '@angular/animations';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.color') color:string ='blue';

  @HostListener('mosuseover') changefontcolor() {
    
    this.color ='red';
  }
  constructor() { }

}
