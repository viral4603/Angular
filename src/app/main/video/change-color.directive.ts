import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  

  // @HostBinding('style.color')color:string ='';
  @HostBinding('style.backgroundColor')colorbg:string ='#A7E9AF';

  @HostListener('mouseover') onMouseOver(){
    // this.color ="";
    this.colorbg ="#EEF9BF";
  }
  @HostListener('mouseleave') onMouseLeave(){
    // this.color ="red";
    this.colorbg ="#A7E9AF";
  }
   constructor() {   
    
  }
  
}
