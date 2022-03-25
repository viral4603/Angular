import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { observable, Observable, Subject } from 'rxjs';
import { EmployeeformComponent } from 'src/app/feature/employee/employeeform/employeeform.component';
import { FilterFormComponent } from 'src/app/shared/filter-form/filter-form.component';
import { Customer, filterdata } from '../../customer.model';

@Injectable()
export class CustomerListService {
  private delete:Subject<number>;
  public delete$:Observable<number>;
  public filterdata:Customer[];
  public filterdata$:Subject<Customer[]>;

  constructor( private overlay: Overlay) { 
    this.delete = new Subject();
    this.delete$ = this.delete.asObservable();
    this.filterdata$ = new Subject<Customer[]>();
  }

  public onDelete(id:number){
    this.delete.next(id);
  }
  
  openfilterForm(currentList:Customer[]){
    console.log(`prenter`,currentList)
    const config = new OverlayConfig();
    config.hasBackdrop = true;  
    config.positionStrategy = this.overlay.position().global().right();
    const overlayRef = this.overlay.create(config);
    const component = new ComponentPortal(FilterFormComponent);
    const componetRef = overlayRef.attach(component);

    componetRef.instance.closeFilter.subscribe(res=>{
      overlayRef.detach()
    });

    componetRef.instance.filterData.subscribe((res : any) =>{

      let dataKey = Object.keys(currentList[0]);
      console.log(dataKey);
      let newData = [...currentList];
      console.log(res);
      dataKey.forEach((item : any) => {
        if (res[item]) {
          newData = newData.filter((data : any) => {
            return data[item] == res[item]
          });
        }
      });
      this.filterdata$.next(newData);
      overlayRef.detach();
      
    });
    overlayRef.backdropClick().subscribe(result=>{
      overlayRef.detach();
    })
  }
}
