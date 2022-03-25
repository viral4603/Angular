import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Customer, filterdata } from '../../customer.model';
import { CustomerListService } from '../customer-list-presenter/customer-list.service';

@Component({
  selector: 'app-customer-list-presentation',
  templateUrl: './customer-list-presentation.component.html',
  styleUrls: ['./customer-list-presentation.component.scss'],
  viewProviders: [CustomerListService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListPresentationComponent implements OnInit {

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
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.customerListPresenterService.delete$.subscribe((res: number) => this.delete.emit(res),
      (error) => { console.log('something went wrong') },
      () => { console.log("Complete") }
    );
    //subscribe filter data
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

}
