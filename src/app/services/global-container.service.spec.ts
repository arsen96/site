import { TestBed } from '@angular/core/testing';

import { GlobalContainerService } from './global-container.service';

describe('GlobalContainerService', () => {
  let service: GlobalContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
