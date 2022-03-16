import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CustomerListService } from '../customer-list-presenter/customer-list.service';

@Component({
  selector: 'app-customer-list-presentation',
  templateUrl: './customer-list-presentation.component.html',
  styleUrls: ['./customer-list-presentation.component.scss'],
  viewProviders: [CustomerListService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListPresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
