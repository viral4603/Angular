import { TestBed } from '@angular/core/testing';

import { UserdatatransferService } from './userdatatransfer.service';

describe('UserdatatransferService', () => {
  let service: UserdatatransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserdatatransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
