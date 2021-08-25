import { TestBed } from '@angular/core/testing';

import { ServiceAnyService } from './service-any.service';

describe('ServiceAnyService', () => {
  let service: ServiceAnyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAnyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
