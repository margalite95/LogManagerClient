import { TestBed } from '@angular/core/testing';

import { CreateLogService } from './create-log.service';

describe('CreateLogService', () => {
  let service: CreateLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
