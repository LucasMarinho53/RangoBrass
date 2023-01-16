import { TestBed } from '@angular/core/testing';

import { FirebasepratoService } from './firebaseprato.service';

describe('FirebasepratoService', () => {
  let service: FirebasepratoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebasepratoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
