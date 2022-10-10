import { TestBed } from '@angular/core/testing';

import { TestClickService } from './test-click.service';

describe('TestClickService', () => {
  let service: TestClickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestClickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
