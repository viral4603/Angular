import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  

  @HostBinding('style.color')color:string ='';
  @HostBinding('style.backgroundColor')colorbg:string ='#f5f4ef';

  @HostListener('mouseover') onMouseOver(){
    this.color ="#ffffff";
    this.colorbg ="#ed7470";
    
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.color ="#000000";
    this.colorbg ="#f5f4ef";
  }
   constructor() {   
    
  }
  
}
