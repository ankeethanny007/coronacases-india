import { TestBed } from '@angular/core/testing';

import { MasterEventService } from './master-event.service';

describe('MasterEventService', () => {
  let service: MasterEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
