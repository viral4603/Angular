import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { observable, Observable, Subject } from 'rxjs';
import { EmployeeformComponent } from 'src/app/feature/employee/employeeform/employeeform.component';
import { FilterFormComponent } from 'src/app/shared/filter-form/filter-form.component';
import { filterdata } from '../../customer.model';

@Injectable()
export class CustomerListService {
  private delete:Subject<number>;
  public delete$:Observable<number>;
  public filterdata:filterdata;
  public filterdata$:Subject<filterdata>;

  constructor( private overlay: Overlay) { 
    this.delete = new Subject();
    this.delete$ = this.delete.asObservable();
    this.filterdata$ = new Subject<filterdata>();
  }

  public onDelete(id:number){
    this.delete.next(id);
  }
  
  openfilterForm(){
    const config = new OverlayConfig();
    config.hasBackdrop = true;  
    config.positionStrategy = this.overlay.position().global().right();
    const overlayRef = this.overlay.create(config);
    const component = new ComponentPortal(FilterFormComponent);
    const componetRef = overlayRef.attach(component);

    componetRef.instance.closeFilter.subscribe(res=>{
      overlayRef.detach()
    });

    componetRef.instance.filterData.subscribe(res =>{
      this.filterdata$.next(res);
      overlayRef.detach();
    });
    overlayRef.backdropClick().subscribe(result=>{
      overlayRef.detach();
    })
  }
}
