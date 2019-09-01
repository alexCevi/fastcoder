import { TestBed } from '@angular/core/testing';

import { CardmodifierService } from './cardmodifier.service';

describe('CardmodifierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardmodifierService = TestBed.get(CardmodifierService);
    expect(service).toBeTruthy();
  });
});
