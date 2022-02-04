import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  constructor(){
    console.log('core  module load');
  }
 }
