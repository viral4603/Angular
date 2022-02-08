import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumecreatComponent } from './resumecreat.component';

describe('ResumecreatComponent', () => {
  let component: ResumecreatComponent;
  let fixture: ComponentFixture<ResumecreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumecreatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumecreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
