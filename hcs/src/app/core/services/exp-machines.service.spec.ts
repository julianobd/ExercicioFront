import { TestBed } from '@angular/core/testing';

import { ExpMachinesService } from './exp-machines.service';

describe('ExpMachinesService', () => {
  let service: ExpMachinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpMachinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
