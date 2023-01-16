import { TestBed } from '@angular/core/testing';

import { FirebasepedidoService } from './firebasepedido.service';

describe('FirebasepedidoService', () => {
  let service: FirebasepedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebasepedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
