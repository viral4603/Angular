import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  

  @HostBinding('style.Color')color:string ='#000000';
  @HostBinding('style.backgroundColor')colorbg:string ='#f5f4ef';
  @HostBinding('style.transition')ts:string ='all 0.2s ease-in-out';
  

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
