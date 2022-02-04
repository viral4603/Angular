import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { VideoComponent } from './main/video/video.component';
import { ChangeColorDirective } from './main/video/change-color.directive';
import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormComponent } from './form/form.component';
import { UserModule } from './user/user.module';
import { EmployeeModule } from './employee/employee.module';
import { HttpClientModule,HttpClient } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    FooterComponent,
    VideoComponent,
    ChangeColorDirective,
    PagenotfoundComponent,
    FormComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    EmployeeModule,
    HttpClientModule 
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
