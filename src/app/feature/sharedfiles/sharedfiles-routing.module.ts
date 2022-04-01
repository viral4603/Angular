import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedfilesComponent } from './sharedfiles.component';

const routes: Routes = [{ path: '', component: SharedfilesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedfilesRoutingModule { }
