import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RouterModule } from '@angular/router';
import { ChangeColorDirective } from '../main/video/change-color.directive';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    ChangeColorDirective,
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent
  ]
})
export class CoreModule {
  constructor() {
    console.log('core  module load');
  }
}
