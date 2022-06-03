import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthInterceptor } from './core/helper/auth.interceptor';
import { DisplayModeComponent } from './feature/display-mode/display-mode.component';
import { ItemViewComponent } from './feature/display-mode/item-view/item-view.component';
import { FormComponent } from './feature/form/form.component';
import { ResumebuilderModule } from './feature/resumebuilder/resumebuilder.module';
import { UserModule } from './feature/user/user.module';
import { ProgressBarComponent } from './feature/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DisplayModeComponent,
    ItemViewComponent,
    ProgressBarComponent,   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ResumebuilderModule,
    CoreModule,
    UserModule,
    OverlayModule,
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
