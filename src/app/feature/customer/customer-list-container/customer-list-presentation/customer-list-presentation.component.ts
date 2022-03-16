import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() public set customerList(value: Customer[] | null){
    if (value) {
            this._customerList = value;
    }
  }
  @Output() public delete:EventEmitter<number>;

  //get value of customer list
  public get customerList() : Customer[] | null {
    return this._customerList;
  }

  //declare customerList 
  private _customerList!: Customer[];

  constructor(private customerListPresenterService:CustomerListService ,private route:Router) {
    this.delete = new EventEmitter();
   }

  ngOnInit(): void {
    this.customerListPresenterService.delete$.subscribe((res:number) => this.delete.emit(res));
  }
  
  //edit method
  public onEdit(id:number){
    this.route.navigateByUrl(`customer/edit/${id}`);
  }

  //delete method
  public onDelete(id:number){
    this.customerListPresenterService.onDelete(id);
  }
  

}
