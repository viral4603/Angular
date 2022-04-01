import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ThisReceiver } from '@angular/compiler';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../customer.model';
import { CustomerListService } from '../customer-list-presenter/customer-list.service';

@Component({
  selector: 'app-customer-list-presentation',
  templateUrl: './customer-list-presentation.component.html',
  styleUrls: ['./customer-list-presentation.component.scss'],
  viewProviders: [CustomerListService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListPresentationComponent implements OnInit {
  red:boolean = true;
  public userList:Customer[];
  sortItems:any;


  @Input() public set customerList(value: Customer[] | null) {
    if (value) {
      if (!this._customerListOriginal) {
        this._customerListOriginal = value;
      }
      this._customerList = value;
    }
  }
  @Output() public delete: EventEmitter<number>;
  FilterActive:boolean = false;


  //get value of customer list
  public get customerList(): Customer[] {
    return this._customerList = this._customerList;
  }

  //declare customerList 
  private _customerList!: Customer[];
  private _customerListOriginal:Customer[];

  //filterData

  constructor(private customerListPresenterService: CustomerListService, private route: Router,
    private cdr: ChangeDetectorRef) {
    this.userList =[];
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.customerListPresenterService.delete$.subscribe((res: number) => this.delete.emit(res),
      (error) => { console.log('something went wrong') },
      () => { console.log("Complete") }
    );
    //subscribe filter data
    this.getFilterData();
    console.log(this.sortData);
  }


  //get filter data
  public getFilterData(){
    this.customerListPresenterService.filterdata$.subscribe(res => {
      this._customerList = res;
      this.FilterActive = true;
      this.cdr.markForCheck();
    })
  }

  //edit method
  public onEdit(id: number) {
    this.route.navigateByUrl(`customer/edit/${id}`);
  }

  //delete method
  public onDelete(id: number) {
    this.customerListPresenterService.onDelete(id);
  }

  //open filter cdk
  openFilter() {
    this.customerListPresenterService.openfilterForm(this._customerListOriginal);
  }

  //pagination
  changePage(userList:Customer[]) {
      this.userList = userList;
      this.cdr.markForCheck();
  } 
  //drage row method
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.userList, event.previousIndex, event.currentIndex);
  }

  //sortData
  sortData(event:any){
    this.sortItems = event.target.innerHTML;    
    this.userList = this.customerListPresenterService.sortingData(this.sortItems,this._customerListOriginal)
  }
}
