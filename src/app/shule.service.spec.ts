import { TestBed } from '@angular/core/testing';

import { ShuleService } from './shule.service';

describe('ShuleService', () => {
  let service: ShuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
