import { TestBed } from '@angular/core/testing';

import { HttputilsService } from './httputils.service';

describe('HttputilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttputilsService = TestBed.get(HttputilsService);
    expect(service).toBeTruthy();
  });
});
