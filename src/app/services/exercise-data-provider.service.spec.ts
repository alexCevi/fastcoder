import { TestBed } from '@angular/core/testing';

import { ExerciseDataProviderService } from './exercise-data-provider.service';

describe('ExerciseDataProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExerciseDataProviderService = TestBed.get(ExerciseDataProviderService);
    expect(service).toBeTruthy();
  });
});
