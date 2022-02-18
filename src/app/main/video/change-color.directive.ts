import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  

  @HostBinding('style.Color')color:string ='#666363';
  @HostBinding('style.backgroundColor')colorbg:string;
  @HostBinding('style.transition')ts:string ='all 0.2s ease-in-out';
  

  @HostListener('mouseover') onMouseOver(){
    this.color ="#475d9e";
    this.colorbg ="#eaedfc";
    
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.color ="#666363";
    this.colorbg ='';
  }
   constructor() {   
    
  }
  
}
