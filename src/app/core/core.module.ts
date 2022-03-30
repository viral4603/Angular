import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class CoreModule {
  constructor() {
  }
}
