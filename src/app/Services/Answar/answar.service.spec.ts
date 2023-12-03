import { TestBed } from '@angular/core/testing';

import { AnswarService } from './answar.service';

describe('AnswarService', () => {
  let service: AnswarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
