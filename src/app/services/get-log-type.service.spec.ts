import { TestBed } from '@angular/core/testing';

import { GetLogTypeService } from './get-log-type.service';

describe('GetLogTypeService', () => {
  let service: GetLogTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLogTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
