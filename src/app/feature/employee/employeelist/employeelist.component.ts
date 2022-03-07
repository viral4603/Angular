import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DeletePopUpComponent } from 'src/app/shared/delete-pop-up/delete-pop-up.component';
import { EmployeeformComponent } from '../employeeform/employeeform.component';
import { EmployeeServicesService } from '../employeeService/employee-services.service';
import { Department, Employee } from '../model';


@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {
  departmentList:Department[];
  public searchtext:string="";
  employeeList: Employee[];


  overlayRef: OverlayRef;


  constructor(private employeeService: EmployeeServicesService,private router:Router, private overlay: Overlay) {

  }
  ngOnInit(): void {
    this.getEmployeelist();
    this.listDepartment();
 }
  //list employee data
  getEmployeelist() {
    this.employeeService.getAllDetails().subscribe((data: Employee[]) => {
      this.employeeList = data;
    })
  }
  editEmployee(id:number){
    this.router.navigate([`/employee/add/${id}`]);
  }
  //add user form
  public openForm(){
    const config = new OverlayConfig();
    config.positionStrategy = this.overlay.position().global().right();
    const overlayRef = this.overlay.create(config); 

    const component = new ComponentPortal(EmployeeformComponent);
    const componetRef = overlayRef.attach(component);

  
  }

  //delete employee with conformation
  deleteEmployee(id:number){
    const config = new OverlayConfig();
    config.hasBackdrop = true;  
    config.positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();

    const overlayRef = this.overlay.create(config);
    const component = new ComponentPortal(DeletePopUpComponent);
    const componetRef = overlayRef.attach(component);

    componetRef.instance.value.subscribe((result)=>{
      if(result){
        this.employeeService.deleteProduct(id).subscribe(res=>alert('delete record succesfully'));
        overlayRef.detach();
      }
      else{
        overlayRef.detach();
      }
    })
 

  }
  listDepartment(){
    this.employeeService.getDepartment().subscribe(data => {
      this.departmentList =data;
    })
  }




}
