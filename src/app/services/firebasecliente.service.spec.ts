import { TestBed } from '@angular/core/testing';

import { FirebaseclienteService } from './firebasecliente.service';

describe('FirebaseclienteService', () => {
  let service: FirebaseclienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseclienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
