import { TestBed } from '@angular/core/testing';

import { DetalleBoletaService } from './detalle-boleta.service';

describe('DetalleBoletaService', () => {
  let service: DetalleBoletaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleBoletaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
