import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { MainComponent } from './main/main.component';
import { ChangeColorDirective } from './main/video/change-color.directive';
import { VideoComponent } from './main/video/video.component';
import { CoreModule } from './core/core.module';
import { FormComponent } from './feature/form/form.component';
import { ResumebuilderModule } from './feature/resumebuilder/resumebuilder.module';
import { SidebarComponent } from './core/sidebar/sidebar.component';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    VideoComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ResumebuilderModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
