import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPrescriptionContainerComponent } from './search-prescription-container.component';

describe('SearchPrescriptionContainerComponent', () => {
  let component: SearchPrescriptionContainerComponent;
  let fixture: ComponentFixture<SearchPrescriptionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPrescriptionContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPrescriptionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
