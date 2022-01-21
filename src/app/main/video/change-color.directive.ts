import { Directive,ElementRef,EventEmitter, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  

  @HostBinding('style.color')color:string ='red';
  @HostBinding('style.backgroundColor')colorbg:string ='white';

  @HostListener('mouseover') onMouseOver(){
    this.color ="white";
    this.colorbg ="red";
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.color ="red";
    this.colorbg ="white";
  }
   constructor() {   
    
  }
  
}
