import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePrescriptionContainerComponent } from './create-prescription-container.component';

describe('CreatePrescriptionContainerComponent', () => {
  let component: CreatePrescriptionContainerComponent;
  let fixture: ComponentFixture<CreatePrescriptionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePrescriptionContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePrescriptionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
