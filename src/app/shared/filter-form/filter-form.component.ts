import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { filterdata } from 'src/app/feature/customer/customer.model';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnInit {
  filterForm:FormGroup;
  @Output()closeFilter:EventEmitter<any>;
  @Output()filterData:EventEmitter<filterdata>; 

  constructor(private fb:FormBuilder) { 
    this.closeFilter = new EventEmitter<any>();
    this.filterData = new EventEmitter<filterdata>();
  }

  ngOnInit(): void {
    this.filterForm =  this.buildForm();
  }
  buildForm():FormGroup{
    return this.fb.group({
      name:[''],
      email:[''],
      age:[''],
      gender:['']
    })
  }
  cancelFilter(){
    this.closeFilter.emit();
  }
  applyFilter(){
      //  console.log(this.filterForm.value); 
       this.filterData.emit(this.filterForm.value);
  }

}
