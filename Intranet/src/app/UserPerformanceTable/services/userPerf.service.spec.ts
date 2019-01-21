/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserPerfService } from './userPerf.service';

describe('Service: UserPerf', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserPerfService]
    });
  });

  it('should ...', inject([UserPerfService], (service: UserPerfService) => {
    expect(service).toBeTruthy();
  }));
});
