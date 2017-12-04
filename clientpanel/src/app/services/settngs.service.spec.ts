import { TestBed, inject } from '@angular/core/testing';

import { SettngsService } from './settngs.service';

describe('SettngsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettngsService]
    });
  });

  it('should be created', inject([SettngsService], (service: SettngsService) => {
    expect(service).toBeTruthy();
  }));
});
