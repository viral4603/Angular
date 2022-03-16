import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CustomerFormService } from '../customer-form-presenter/customer-form.service';

@Component({
  selector: 'app-customer-form-presentation',
  templateUrl: './customer-form-presentation.component.html',
  styleUrls: ['./customer-form-presentation.component.scss'],
  viewProviders: [CustomerFormService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerFormPresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
